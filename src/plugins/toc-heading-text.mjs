import GithubSlugger from "github-slugger";

const TOC_TEXT_ATTRIBUTE = "data-toc-text";
const TOC_ENTRY_ATTRIBUTE = "data-toc-entry";
const TOC_DEPTH_ATTRIBUTE = "data-toc-depth";
const TOC_LIST_DEPTH_ATTRIBUTE = "data-toc-list-depth";

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

function firstContentNode(nodes = []) {
	return nodes.find(
		(node) => node.type !== "text" || node.value.trim().length > 0,
	);
}

/**
 * Return the leading bold label of a Markdown list item. Course notes use
 * entries such as `- **Definition 1**` and nested `- **Proof 1.1**` blocks.
 * Requiring a number keeps ordinary bold-label lists out of the article TOC.
 */
function getNumberedListLabel(node) {
	if (node.type !== "element" || node.tagName !== "li") return null;

	const firstBlock = firstContentNode(node.children);
	if (!firstBlock) return null;

	const labelContainer =
		firstBlock.type === "element" && firstBlock.tagName === "p"
			? firstBlock
			: node;
	const firstInline = firstContentNode(labelContainer.children);
	if (
		firstInline?.type !== "element" ||
		firstInline.tagName !== "strong"
	) {
		return null;
	}

	const text = getHeadingText(firstInline).trim();
	if (!/\d/.test(text)) return null;

	return { node: firstInline, text };
}

function collectExistingIds(node, ids) {
	if (node.type === "element" && typeof node.properties?.id === "string") {
		ids.add(node.properties.id);
	}
	for (const child of node.children ?? []) collectExistingIds(child, ids);
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
		const usedIds = new Set();
		collectExistingIds(tree, usedIds);

		let currentHeadingDepth = 1;
		let hasSeenHeading = false;

		const createId = (text) => {
			let slug = slugger.slug(text);
			while (usedIds.has(slug)) slug = slugger.slug(text);
			usedIds.add(slug);
			return slug;
		};

		const addEntry = (node, text, depth, kind, listDepth = 0) => {
			node.properties ??= {};
			node.properties[TOC_TEXT_ATTRIBUTE] = text;
			node.properties[TOC_ENTRY_ATTRIBUTE] = kind;
			node.properties[TOC_DEPTH_ATTRIBUTE] = String(depth);
			if (kind === "list-item") {
				node.properties[TOC_LIST_DEPTH_ATTRIBUTE] = String(listDepth);
			}
			if (typeof node.properties.id !== "string") {
				node.properties.id = createId(text);
			}

			headings.push({
				depth,
				slug: node.properties.id,
				text,
				kind,
				listDepth,
			});
		};

		const walk = (node, listDepth = 0) => {
			if (node.type === "element") {
				const headingMatch = /^h([1-6])$/.exec(node.tagName);
				if (headingMatch) {
					const depth = Number.parseInt(headingMatch[1], 10);
					currentHeadingDepth = depth;
					hasSeenHeading = true;
					addEntry(node, getHeadingText(node).trim(), depth, "heading");
					return;
				}

				if (node.tagName === "ul" || node.tagName === "ol") {
					for (const child of node.children ?? []) walk(child, listDepth + 1);
					return;
				}

				if (node.tagName === "li") {
					const label = getNumberedListLabel(node);
					if (label) {
						const baseDepth = hasSeenHeading ? currentHeadingDepth : 1;
						const depth = Math.min(6, baseDepth + Math.max(1, listDepth));
						addEntry(label.node, label.text, depth, "list-item", listDepth);
					}
				}
			}

			for (const child of node.children ?? []) walk(child, listDepth);
		};

		walk(tree);

		file.data.astro ??= {};
		file.data.astro.frontmatter ??= {};
		file.data.astro.frontmatter.tocHeadings = headings;
	};
}
