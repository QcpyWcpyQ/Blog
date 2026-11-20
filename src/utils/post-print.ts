import mathStyles from "katex/dist/katex.min.css?inline";
import sheetStyles from "@/styles/post-print-sheet.css?inline";

const blockChildren = "p,div,section,article,h1,h2,h3,h4,h5,h6,ul,ol,li,pre,table,thead,tbody,tfoot,tr,blockquote,figure,hr,.katex-display";
const licenseUrl = "https://creativecommons.org/licenses/by-nc-sa/4.0/";
let previousFrame: HTMLIFrameElement | undefined;

function makePage(doc: Document, number: number): HTMLElement {
	const sheet = doc.createElement("section");
	sheet.className = "sheet";
	const header = doc.createElement("header");
	const link = doc.createElement("a");
	link.href = licenseUrl;
	link.textContent = "CC BY-NC-SA 4.0";
	header.append("遵循许可协议 ", link);
	const flow = doc.createElement("main");
	flow.className = "flow";
	const footer = doc.createElement("footer");
	footer.textContent = String(number);
	sheet.append(header, flow, footer);
	doc.body.append(sheet);
	return flow;
}

function paginate(source: HTMLElement): void {
	const doc = source.ownerDocument;
	let number = 1;
	let flow = makePage(doc, number);
	let used = false;
	let parents = new Map<Node, HTMLElement>([[source, flow]]);
	const printed = new WeakSet<Node>();

	// Rebuild only the enclosing list, section or table when it crosses a page.
	function destination(node: HTMLElement): HTMLElement {
		const known = parents.get(node);
		if (known) return known;
		const parent = destination(node.parentElement!);
		const copy = node.cloneNode(false) as HTMLElement;
		if (printed.has(node)) {
			copy.removeAttribute("id");
			if (copy.tagName === "LI") copy.classList.add("continued");
			if (copy.tagName === "TABLE") {
				const head = node.querySelector(":scope > thead");
				if (head) copy.append(head.cloneNode(true));
			}
		}
		parent.append(copy);
		parents.set(node, copy);
		return copy;
	}

	function place(node: HTMLElement): void {
		let parent = destination(node.parentElement!);
		const copy = node.cloneNode(true) as HTMLElement;
		parent.append(copy);
		if (used && flow.scrollHeight > flow.clientHeight + 1) {
			copy.remove();
			// A first child may have created otherwise empty wrappers.
			while (parent !== flow && !parent.childNodes.length) {
				const empty = parent;
				parent = parent.parentElement!;
				empty.remove();
			}
			flow = makePage(doc, ++number);
			parents = new Map([[source, flow]]);
			parent = destination(node.parentElement!);
			parent.append(copy);
			used = false;
		}
		// Exceptional single blocks (e.g. a tall matrix) still fit as a unit.
		if (!used && flow.scrollHeight > flow.clientHeight) {
			copy.style.zoom = String((flow.clientHeight - 4) / flow.scrollHeight);
		}
		for (let ancestor = node.parentElement; ancestor && ancestor !== source; ancestor = ancestor.parentElement) {
			printed.add(ancestor);
		}
		used = true;
	}

	function layout(node: HTMLElement): void {
		// Walk structural wrappers. Keep paragraphs, rows and all math atomic.
		if (node.matches(".katex-display-container,.katex-display,.katex,figure:not(:has(pre)),svg")) {
			place(node);
			return;
		}
		if (node.matches("table") && node.offsetHeight < flow.clientHeight) {
			place(node);
			return;
		}
		if (node.matches("section,article,div,ul,ol,li,blockquote,figure,table,tbody,tfoot")
			&& Array.from(node.children).some(child =>
				child.matches(blockChildren))) {
			// Tight lists and mixed Markdown can contain text before a nested block.
			let run: HTMLElement | undefined;
			for (const child of Array.from(node.childNodes)) {
				if (child.nodeType === Node.ELEMENT_NODE && (child as Element).matches(blockChildren)) {
					run = undefined;
					continue;
				}
				if (!run && child.nodeType === Node.TEXT_NODE && !child.textContent?.trim()) continue;
				if (!run) {
					run = doc.createElement("p");
					node.insertBefore(run, child);
				}
				run.append(child);
			}
			for (const child of Array.from(node.children)) layout(child as HTMLElement);
			return;
		}
		if (node.tagName === "PRE" && node.offsetHeight > flow.clientHeight) {
			const lines = node.querySelectorAll(".ec-line");
			const text = lines.length ? Array.from(lines, line => line.textContent).join("\n") : node.textContent ?? "";
			for (const line of text.split("\n")) {
				const row = doc.createElement("pre");
				row.style.margin = "0";
				row.textContent = line || "\u00a0";
				node.before(row);
				place(row);
			}
			return;
		}
		place(node);
	}
	for (const child of Array.from(source.children)) layout(child as HTMLElement);
	source.remove();
}

export async function printArticle(article: HTMLElement, title: string, notes: HTMLElement | null): Promise<void> {
	previousFrame?.remove();
	const frame = document.createElement("iframe");
	frame.setAttribute("aria-hidden", "true");
	frame.title = title;
	frame.style.cssText = "position:fixed;left:-220mm;top:0;width:210mm;height:297mm;border:0;pointer-events:none";
	document.body.append(frame);
	previousFrame = frame;
	try {
		const doc = frame.contentDocument!;
		doc.documentElement.lang = document.documentElement.lang;
		doc.title = title;
		const base = doc.createElement("base");
		base.href = document.baseURI;
		const style = doc.createElement("style");
		style.textContent = mathStyles + "\n" + sheetStyles;
		doc.head.append(base, style);
		const source = doc.createElement("article");
		source.className = "flow staging";
		const heading = doc.createElement("h1");
		heading.textContent = title;
		source.append(heading, doc.importNode(article, true));
		if (notes?.dataset.hasNote === "true") source.append(doc.importNode(notes, true));
		source.querySelectorAll("script,style,button:not(.post-annotation-number),.anchor,.copy,[data-no-print]").forEach(el => el.remove());
		const images = Array.from(source.querySelectorAll("img"));
		for (const img of images) img.loading = "eager";
		doc.body.append(source);
		// Resolve layout before waiting for fonts so KaTeX font requests start.
		source.getBoundingClientRect();
		await Promise.race([
			Promise.all([doc.fonts.ready, ...images.map(img => img.decode().catch(() => {}))]),
			new Promise<void>(resolve => setTimeout(resolve, 8000)),
		]);
		for (const formula of source.querySelectorAll<HTMLElement>(".katex-display")) {
			const math = formula.querySelector<HTMLElement>(".katex");
			const visual = math?.querySelector<HTMLElement>(".katex-html");
			if (!math || !visual) continue;
			const width = visual.getBoundingClientRect().width;
			if (width > formula.clientWidth && formula.clientWidth > 0) math.style.zoom = String((formula.clientWidth - 2) / width);
		}
		for (const list of source.querySelectorAll("ol")) {
			let value = list.hasAttribute("start") ? list.start : list.reversed ? list.children.length : 1;
			for (const child of list.children) {
				if (child.tagName !== "LI") continue;
				const item = child as HTMLLIElement;
				if (item.hasAttribute("value")) value = item.value;
				item.value = value;
				value += list.reversed ? -1 : 1;
			}
		}
		paginate(source);
		const printWindow = frame.contentWindow!;
		printWindow.addEventListener("afterprint", () => setTimeout(() => frame.remove(), 0), { once: true });
		printWindow.focus();
		printWindow.print();
	} catch (error) {
		frame.remove();
		throw error;
	}
}
