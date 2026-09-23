import { loadRenderers } from "astro:container";
import type { CollectionEntry } from "astro:content";
import { render } from "astro:content";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx/container-renderer";
import { getContainerRenderer as getSvelteRenderer } from "@astrojs/svelte/container-renderer";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { url } from "@utils/url-utils";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import sanitizeHtml from "sanitize-html";

/**
 * 归一化后的 feed 条目，供 RSS 与 Atom 共用。
 */
export type FeedEntry = {
	post: CollectionEntry<"posts">;
	title: string;
	/** BASE_URL 感知的相对路径，如 "/posts/foo/" */
	link: string;
	published: Date;
	updated: Date;
	description: string;
	/** 已 sanitize 的 HTML 正文，或加密文章提示文案 */
	content: string;
	isPasswordProtected: boolean;
};

/**
 * 移除 XML 非法字符（W3C 字符集规定外），避免 feed 文件解析失败。
 */
export function stripInvalidXmlChars(str: string): string {
	return str.replace(
		// biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
		"",
	);
}

/**
 * XML 文本转义；先剥离非法字符再转义 5 个 XML 特殊字符。
 */
export function escapeXml(str: string): string {
	return stripInvalidXmlChars(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

/**
 * 用 CDATA 包裹 HTML 内容，并安全处理内容中可能出现的 "]]>"（如代码块），
 * 使正文原样保留、不被二次转义。
 */
export function cdataWrapped(text: string): string {
	return `<![CDATA[${text.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

/**
 * 折叠正文里超长的连续空白换行，使 feed 源码更整洁；同时保护 <pre>/<code>
 * 内的空白（代码缩进/空行有语义），避免被破坏。空行在 HTML 渲染中会被浏览器折叠，
 */
function collapseFeedWhitespace(html: string): string {
	const protectedBlocks: string[] = [];
	const masked = html.replace(
		/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>/gi,
		(match) => {
			protectedBlocks.push(match);
			return `@@PRE_BLOCK_${protectedBlocks.length - 1}@@`;
		},
	);
	// 3+ 个连续换行（即 2+ 个空行）折叠为一个空行，保留单个空行作为段落分隔
	const collapsed = masked.replace(/\n[ \t]*\n[ \t]*\n+/g, "\n\n");
	return collapsed.replace(/@@PRE_BLOCK_(\d+)@@/g, (_, index) => {
		return protectedBlocks[Number(index)];
	});
}

/**
 * 把路径解析成绝对 URL（Atom 规范强制要求绝对 IRI）。
 * path 为相对路径时直接相对 site 求绝对。
 */
export function toAbsoluteUrl(site: URL, path: string): string {
	return new URL(path.startsWith("/") ? path : `/${path}`, site).href;
}

/**
 * 渲染全部文章正文为 feed 条目。
 *
 * 复用 AstroContainer + 渲染器（MDX/Svelte），密码文章跳过渲染改用提示文案。
 * 保持「先剥离 XML 非法字符、后 sanitize」的顺序，确保 RSS 输出与旧版逐字节一致。
 */
export async function renderFeedEntries(
	posts: CollectionEntry<"posts">[],
	opts: { includeContent?: boolean } = {},
): Promise<FeedEntry[]> {
	const { includeContent = true } = opts;
	const renderers = await loadRenderers([
		getMDXRenderer(),
		getSvelteRenderer(),
	]);
	const container = await AstroContainer.create({ renderers });
	const entries: FeedEntry[] = [];
	for (const post of posts) {
		const link = url(`/posts/${post.id}/`);
		const updated = post.data.updated ?? post.data.published;
		const base: Omit<FeedEntry, "content" | "isPasswordProtected"> = {
			post,
			title: post.data.title,
			link,
			published: post.data.published,
			updated,
			description: post.data.description || "",
		};
		if (post.data.password) {
			entries.push({
				...base,
				content: includeContent ? i18n(I18nKey.passwordProtectedRss) : "",
				isPasswordProtected: true,
			});
			continue;
		}
		// 摘要模式跳过正文渲染，仅保留描述，避免昂贵的 AstroContainer 开销
		if (!includeContent) {
			entries.push({ ...base, content: "", isPasswordProtected: false });
			continue;
		}
		const { Content } = await render(post);
		const rawContent = await container.renderToString(Content);
		const cleanedContent = stripInvalidXmlChars(rawContent);
		entries.push({
			...base,
			content: collapseFeedWhitespace(
				sanitizeHtml(cleanedContent, {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
				}),
			),
			isPasswordProtected: false,
		});
	}
	return entries;
}

/**
 * 构建 Atom 1.0（RFC 4287）feed 字符串。
 */
export function buildAtomFeed(opts: {
	site: URL;
	title: string;
	subtitle: string;
	entries: FeedEntry[];
	authorName: string;
	generator: string;
	includeContent?: boolean;
}): string {
	const {
		site,
		title,
		subtitle,
		entries,
		authorName,
		generator,
		includeContent = true,
	} = opts;
	const siteRoot = toAbsoluteUrl(site, "/");
	const selfLink = toAbsoluteUrl(site, "atom.xml");
	const feedUpdated =
		entries.reduce<Date | null>(
			(latest, e) =>
				latest === null || e.updated > latest ? e.updated : latest,
			null,
		) ?? new Date();

	const entryXml = entries
		.map((e) => {
			const entryUrl = toAbsoluteUrl(site, e.link);
			const entryAuthor = e.post.data.author?.trim() || authorName;
			const contentXml = includeContent
				? `\n      <content type="html">${cdataWrapped(e.content)}</content>`
				: "";
			return `    <entry>
      <id>${escapeXml(entryUrl)}</id>
      <title type="text">${escapeXml(e.title)}</title>
      <published>${e.published.toISOString()}</published>
      <updated>${e.updated.toISOString()}</updated>
      <author><name>${escapeXml(entryAuthor)}</name></author>
      <link rel="alternate" href="${escapeXml(entryUrl)}"/>
      <summary type="text">${escapeXml(e.description)}</summary>${contentXml}
    </entry>`;
		})
		.join("\n");

	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${escapeXml(siteRoot)}</id>
  <title type="text">${escapeXml(title)}</title>
  <subtitle type="text">${escapeXml(subtitle)}</subtitle>
  <updated>${feedUpdated.toISOString()}</updated>
  <author><name>${escapeXml(authorName)}</name></author>
  <link rel="alternate" href="${escapeXml(siteRoot)}"/>
  <link rel="self" href="${escapeXml(selfLink)}"/>
  <generator uri="https://github.com/CuteLeaf/Firefly">${escapeXml(generator)}</generator>
${entryXml}
</feed>
`;
}
