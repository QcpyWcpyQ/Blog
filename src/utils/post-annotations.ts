/** Offsets plus surrounding text let annotations survive reloads and small edits. */
export interface TextAnchor {
	start: number;
	end: number;
	quote: string;
	prefix: string;
	suffix: string;
}

export interface PostAnnotation extends TextAnchor {
	id: string;
	comment: string;
}

const excluded =
	"script, style, button, textarea, .katex-mathml, annotation, .anchor, [data-no-print], [data-note-marker]";

export function indexArticle(root: HTMLElement): {
	text: string;
	nodes: { node: Text; start: number; end: number }[];
} {
	const nodes: { node: Text; start: number; end: number }[] = [];
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	let text = "";
	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		if (node.parentElement?.closest(excluded)) continue;
		const value = node.textContent ?? "";
		nodes.push({
			node: node as Text,
			start: text.length,
			end: text.length + value.length,
		});
		text += value;
	}
	return { text, nodes };
}

export function anchorSelection(
	root: HTMLElement,
	range: Range,
): TextAnchor | null {
	if (
		!root.contains(range.startContainer) ||
		!root.contains(range.endContainer)
	)
		return null;
	const { text, nodes } = indexArticle(root);
	let start = -1;
	let end = -1;
	for (const entry of nodes) {
		if (!range.intersectsNode(entry.node)) continue;
		const a =
			entry.start +
			(range.startContainer === entry.node ? range.startOffset : 0);
		const b =
			entry.start +
			(range.endContainer === entry.node ? range.endOffset : entry.node.length);
		if (b <= a) continue;
		if (start < 0) start = a;
		end = b;
	}
	if (start < 0 || end <= start) return null;
	while (start < end && /\s/.test(text[start])) start++;
	while (end > start && /\s/.test(text[end - 1])) end--;
	if (start === end) return null;
	return {
		start,
		end,
		quote: text.slice(start, end),
		prefix: text.slice(Math.max(0, start - 48), start),
		suffix: text.slice(end, end + 48),
	};
}

export function locateAnchor(
	text: string,
	anchor: TextAnchor,
): { start: number; end: number } | null {
	const matches: { start: number; end: number; score: number }[] = [];
	let at = text.indexOf(anchor.quote);
	while (at !== -1) {
		const end = at + anchor.quote.length;
		let score = 0;
		if (
			anchor.prefix &&
			text.slice(Math.max(0, at - anchor.prefix.length), at) === anchor.prefix
		)
			score++;
		if (
			anchor.suffix &&
			text.slice(end, end + anchor.suffix.length) === anchor.suffix
		)
			score++;
		matches.push({ start: at, end, score });
		at = text.indexOf(anchor.quote, at + 1);
	}
	if (matches.length === 1) return matches[0];
	const exact = matches.find(
		(match) => match.start === anchor.start && match.score === 2,
	);
	if (exact) return exact;
	matches.sort((a, b) => b.score - a.score);
	// Ambiguous matches stay in the notebook instead of underlining the wrong text.
	return matches[0]?.score > (matches[1]?.score ?? 0) ? matches[0] : null;
}

export function parseAnnotations(raw: string | null): PostAnnotation[] {
	if (!raw) return [];
	const data: unknown = JSON.parse(raw);
	if (!Array.isArray(data)) throw new Error("Invalid annotations");
	const ids = new Set<string>();
	return data.filter((value): value is PostAnnotation => {
		if (!value || typeof value !== "object") return false;
		const a = value as PostAnnotation;
		if (
			typeof a.id !== "string" ||
			!a.id ||
			ids.has(a.id) ||
			typeof a.comment !== "string" ||
			typeof a.quote !== "string" ||
			!a.quote.trim() ||
			typeof a.prefix !== "string" ||
			typeof a.suffix !== "string" ||
			!Number.isSafeInteger(a.start) ||
			!Number.isSafeInteger(a.end) ||
			a.start < 0 ||
			a.end <= a.start
		)
			return false;
		ids.add(a.id);
		return true;
	});
}

export function clearAnnotations(root: HTMLElement): void {
	root.querySelectorAll("[data-note-marker]").forEach((node) => {
		node.remove();
	});
	root.querySelectorAll("[data-note-wrap]").forEach((node) => {
		const parent = node.parentNode;
		node.replaceWith(...node.childNodes);
		parent?.normalize();
	});
	root
		.querySelectorAll<HTMLElement>(".post-annotation-math")
		.forEach((node) => {
			node.classList.remove("post-annotation-math");
			delete node.dataset.noteIds;
		});
}

export function renderAnnotations(
	root: HTMLElement,
	annotations: PostAnnotation[],
): string[] {
	clearAnnotations(root);
	const { text, nodes } = indexArticle(root);
	const resolved = annotations.map((annotation) => ({
		annotation,
		position: locateAnchor(text, annotation),
	}));
	const lastMarks = new Map<string, HTMLElement>();
	for (const entry of nodes) {
		const overlapping = resolved.filter(
			({ position }) =>
				position && position.start < entry.end && position.end > entry.start,
		);
		if (!overlapping.length) continue;
		const math = entry.node.parentElement?.closest<HTMLElement>(".katex");
		if (math) {
			// Treat formulas atomically; never alter KaTeX's internal layout spans.
			math.classList.add("post-annotation-math");
			const ids = new Set(
				(math.dataset.noteIds ?? "").split(" ").filter(Boolean),
			);
			for (const { annotation } of overlapping) {
				ids.add(annotation.id);
				lastMarks.set(annotation.id, math);
			}
			math.dataset.noteIds = [...ids].join(" ");
			continue;
		}
		const cuts = new Set([entry.start, entry.end]);
		for (const { position } of overlapping) {
			if (!position) continue;
			cuts.add(Math.max(entry.start, position.start));
			cuts.add(Math.min(entry.end, position.end));
		}
		const boundaries = [...cuts].sort((a, b) => a - b);
		const fragment = document.createDocumentFragment();
		for (let i = 1; i < boundaries.length; i++) {
			const a = boundaries[i - 1];
			const b = boundaries[i];
			const active = overlapping.filter(
				({ position }) => position && position.start < b && position.end > a,
			);
			const value = text.slice(a, b);
			if (!active.length) {
				fragment.append(document.createTextNode(value));
				continue;
			}
			const mark = document.createElement("span");
			mark.dataset.noteWrap = "";
			mark.dataset.noteIds = active
				.map(({ annotation }) => annotation.id)
				.join(" ");
			mark.className = "post-annotation";
			mark.textContent = value;
			fragment.append(mark);
			for (const { annotation } of active) lastMarks.set(annotation.id, mark);
		}
		entry.node.replaceWith(fragment);
	}
	for (const [i, annotation] of annotations.entries()) {
		const mark = lastMarks.get(annotation.id);
		if (!mark) continue;
		const badge = document.createElement("sup");
		badge.dataset.noteMarker = "";
		badge.dataset.noteIds = annotation.id;
		badge.className = "post-annotation-number";
		badge.textContent = `[${i + 1}]`;
		badge.tabIndex = 0;
		badge.setAttribute("role", "button");
		badge.setAttribute(
			"aria-label",
			`批注 ${i + 1}：${annotation.comment || "仅划线"}`,
		);
		mark.after(badge);
	}
	return resolved
		.filter(({ position }) => !position)
		.map(({ annotation }) => annotation.id);
}

/** Plain text only: annotations must not inject HTML into either export. */
export function updatePrintNotes(
	container: HTMLElement,
	note: string,
	annotations: PostAnnotation[],
): void {
	const section = container.querySelector<HTMLElement>(
		"[data-post-print-notes]",
	);
	const content = section?.querySelector<HTMLElement>(
		"[data-post-print-notes-content]",
	);
	if (!section || !content) return;
	content.replaceChildren();
	if (note.trim()) {
		const paragraph = document.createElement("p");
		paragraph.textContent = note;
		content.append(paragraph);
	}
	if (annotations.length) {
		const list = document.createElement("ol");
		for (const annotation of annotations) {
			const item = document.createElement("li");
			const quote = document.createElement("blockquote");
			quote.textContent = annotation.quote;
			const comment = document.createElement("p");
			comment.textContent = annotation.comment || "仅划线";
			item.append(quote, comment);
			list.append(item);
		}
		content.append(list);
	}
	section.dataset.hasNote = String(Boolean(note.trim() || annotations.length));
}

function escapeMarkdown(text: string): string {
	return text.replace(/([\\\x60*_[\]<>#])/g, "\\$1");
}

export function notesMarkdown(
	note: string,
	annotations: PostAnnotation[],
): string {
	if (!note.trim() && !annotations.length) return "";
	const chunks = ["\n\n---\n\n## 阅读笔记\n"];
	if (note.trim()) chunks.push(escapeMarkdown(note));
	annotations.forEach((annotation, i) => {
		chunks.push(`\n### 批注 ${i + 1}\n`);
		chunks.push(
			escapeMarkdown(annotation.quote)
				.split("\n")
				.map((line) => `> ${line}`)
				.join("\n"),
		);
		chunks.push(`\n${escapeMarkdown(annotation.comment || "仅划线")}\n`);
	});
	return chunks.join("\n");
}
