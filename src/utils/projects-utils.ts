import { getImage } from "astro:assets";
import I18nKey from "@/i18n/i18nKey";
import { i18n } from "@/i18n/translation";
import { siteConfig } from "../config/siteConfig";
import { loadLocalImage } from "./schema-image";
import { getFileDirFromPath, url } from "./url-utils";

/**
 * 项目封面/图：把原始 src 解析为可加载的同源 URL。
 * - 绝对 URL（http(s)://、//、data:）原样返回；
 * - 公共根路径（/...）用 url() 加 BASE_URL；
 * - 相对路径（./...、foo.png）经 astro:assets 优化，返回**真实产出的资产 URL**。
 */
async function resolveOptimizedCoverUrl(
	src: string,
	filePath?: string,
): Promise<string> {
	if (!src) return "";
	if (/^(?:https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;
	if (src.startsWith("/")) return url(src);
	const img = await loadLocalImage(src, getFileDirFromPath(filePath || ""));
	if (!img) return "";
	const optimized = await getImage({ src: img, width: 1600 });
	return optimized.src;
}

/** 同源 URL（页面内封面展示 / 灯箱用；不包装 site_url，本地调试不指向远程域名）。 */
export async function resolveProjectImage(
	src: string,
	filePath?: string,
): Promise<string> {
	return resolveOptimizedCoverUrl(src, filePath);
}

/** 绝对 URL（OG 元数据用）：相对/公共路径包装为绝对地址，远程原样返回。 */
export async function resolveProjectImageAbsolute(
	src: string,
	filePath?: string,
): Promise<string> {
	const sameOrigin = await resolveOptimizedCoverUrl(src, filePath);
	if (!sameOrigin) return "";
	if (/^(?:https?:)?\/\//i.test(sameOrigin) || sameOrigin.startsWith("data:")) {
		return sameOrigin;
	}
	return new URL(url(sameOrigin), siteConfig.site_url).toString();
}

// astro-icon 图标名格式：namespace:name
const ICON_NAME_PATTERN = /^[\w-]+:[\w-]+$/;

export type ResolvedLinkIcon =
	| { kind: "icon"; value: string } // astro-icon 图标名
	| { kind: "image"; value: string } // 图片地址
	| { kind: "letter"; value: string }; // label 首字母兜底

/**
 * 解析 link 条目的图标：astro-icon 名 / 图片 URL / 公共路径 → 首字母兜底。
 * 判定规则与书签导航的 resolveBooknavIcon 一致。
 */
export function resolveLinkIcon(icon: string, label: string): ResolvedLinkIcon {
	const trimmed = icon?.trim();
	if (trimmed) {
		if (/^https?:\/\//.test(trimmed) || trimmed.startsWith("/")) {
			return { kind: "image", value: trimmed };
		}
		if (ICON_NAME_PATTERN.test(trimmed)) {
			return { kind: "icon", value: trimmed };
		}
		return { kind: "image", value: trimmed };
	}
	const letter = (label || "?").trim().charAt(0).toUpperCase() || "?";
	return { kind: "letter", value: letter };
}

// 项目状态：标准 key → i18nKey + 配色 class + 图标（主题色感知）
// 未知字符串回退为中性灰、原样显示，保证自由字符串兼容
const PROJECT_STATUS_META: Record<
	string,
	{ key: I18nKey; icon: string; className: string; coverClassName: string }
> = {
	planning: {
		key: I18nKey.projectStatusPlanning,
		icon: "material-symbols:schedule",
		className:
			"bg-neutral-200/80 text-neutral-600 dark:bg-neutral-700/60 dark:text-neutral-300",
		// 封面覆盖用：近实色 + 白字
		coverClassName: "bg-neutral-500/85 text-white dark:bg-neutral-600/85",
	},
	developing: {
		key: I18nKey.projectStatusDeveloping,
		icon: "material-symbols:code",
		className: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
		coverClassName: "bg-amber-500/90 text-white dark:bg-amber-600/90",
	},
	published: {
		key: I18nKey.projectStatusPublished,
		icon: "material-symbols:rocket-launch",
		className: "bg-green-500/15 text-green-600 dark:text-green-400",
		coverClassName: "bg-green-600/90 text-white dark:bg-green-700/90",
	},
	archived: {
		key: I18nKey.projectStatusArchived,
		icon: "material-symbols:archive",
		className:
			"bg-neutral-200/80 text-neutral-600 dark:bg-neutral-700/60 dark:text-neutral-300",
		coverClassName: "bg-neutral-500/85 text-white dark:bg-neutral-600/85",
	},
};

// 已知状态 key 列表（供列表页生成筛选按钮）
export const PROJECT_STATUS_KEYS: string[] = Object.keys(PROJECT_STATUS_META);

const NEUTRAL_STATUS_CLASS =
	"bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300";
const NEUTRAL_COVER_CLASS =
	"bg-neutral-500/85 text-white dark:bg-neutral-600/85";

/**
 * 解析项目状态：标准 key 返回本地化文案 + 配色 + 图标；未知字符串原样显示（中性灰）。
 */
export function getProjectStatusMeta(status: string): {
	label: string;
	icon: string;
	className: string;
	coverClassName: string;
	known: boolean;
} {
	if (!status)
		return {
			label: "",
			icon: "",
			className: NEUTRAL_STATUS_CLASS,
			coverClassName: NEUTRAL_COVER_CLASS,
			known: false,
		};
	const meta = PROJECT_STATUS_META[status];
	if (!meta)
		return {
			label: status,
			icon: "",
			className: NEUTRAL_STATUS_CLASS,
			coverClassName: NEUTRAL_COVER_CLASS,
			known: false,
		};
	return {
		label: i18n(meta.key),
		icon: meta.icon,
		className: meta.className,
		coverClassName: meta.coverClassName,
		known: true,
	};
}
