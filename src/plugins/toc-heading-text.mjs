import GithubSlugger from "github-slugger";
import { visit } from "unist-util-visit";

const TOC_TEXT_ATTRIBUTE = "data-toc-text";

function getClassNames(node) {
	const className = node.properties?.className;
	if (Array.isArray(className)) return className;
	if (typeof className === "string") return className.split(/\s+/);
	return [];
}

function findElement(node, predicate) {
	if (node.type === "element" && predicate(node)) return node;
	for (const child of node.children ?? []) {
		const match = findElement(child, predicate);
		if (match) return match;
	}
	return null;
}

function getHeadingText(node, normalizeKatex = true) {
	if (node.type === "text") return node.value;
	if (node.type === "raw") {
		return /^\n?<.*>\n?$/.test(node.value) ? "" : node.value;
	}
	if (node.type !== "element" && node.type !== "root") return "";
	if (node.type === "element" && ["script", "style"].includes(node.tagName)) {
		return "";
	}

	if (
		normalizeKatex &&
		node.type === "element" &&
		getClassNames(node).includes("katex")
	) {
		const html = findElement(node, (element) =>
			getClassNames(element).includes("katex-html"),
		);
		if (html) return getHeadingText(html, false);

		const annotation = findElement(
			node,
			(element) => element.tagName === "annotation",
		);
		if (annotation) return getHeadingText(annotation, false);
	}

	return (node.children ?? [])
		.map((child) => getHeadingText(child, normalizeKatex))
		.join("");
}

/**
 * Collect clean TOC headings after rehype-katex. KaTeX keeps parallel MathML
 * and HTML representations for accessibility, so generic text extraction sees
 * a formula multiple times. Use the visible HTML representation exactly once,
 * preserve it for client-side TOC rebuilds, and assign ids from the clean text.
 */
export function rehypeTocHeadings() {
	return (tree, file) => {
		const headings = [];
		const slugger = new GithubSlugger();

		visit(tree, "element", (node) => {
			const match = /^h([1-6])$/.exec(node.tagName);
			if (!match) return;

			const text = getHeadingText(node).trim();
			node.properties ??= {};
			node.properties[TOC_TEXT_ATTRIBUTE] = text;
			if (typeof node.properties.id !== "string") {
				node.properties.id = slugger.slug(text);
			}

			const slug = node.properties.id;

			headings.push({
				depth: Number.parseInt(match[1], 10),
				slug,
				text,
			});
		});

		file.data.astro ??= {};
		file.data.astro.frontmatter ??= {};
		file.data.astro.frontmatter.tocHeadings = headings;
	};
}
