const STORAGE_KEY = "answer-mask-enabled";
const MASK_CLASS = "answers-masked";
const ANSWER_TITLE = /^(?:supplementary\s+)?(?:solutions?|proof|answers?|results?|counterexample)(?:\s+\d+(?:\.\d+)*)?(?:\s*\(.*\)|\s+of\s+.+)?[.:\s]*$/i;
const QUESTION_TITLE = /^(?:problem|question|exercise|example|definition|theorem|lemma|proposition|remark|corollary)\b/i;

let button: HTMLButtonElement | null = null;
let enabled = false;
let stateLoaded = false;

function loadState(): void {
	if (stateLoaded) return;
	stateLoaded = true;
	try {
		enabled = localStorage.getItem(STORAGE_KEY) === "true";
	} catch {
		enabled = false;
	}
}

function saveState(): void {
	try {
		localStorage.setItem(STORAGE_KEY, String(enabled));
	} catch {
		// Storage can be unavailable in private browsing; the current page still works.
	}
}

function isAnswerTitle(text: string | null | undefined): boolean {
	return ANSWER_TITLE.test(text?.trim() ?? "");
}

const BLOCK = "p,ul,ol,div,section,pre,table,blockquote,figure,hr,h1,h2,h3,h4,h5,h6";
const HEADING = "h1,h2,h3,h4,h5,h6";

function leadingLabel(element: Element): Element | null {
	return element.querySelector(":scope > strong:first-child, :scope > p:first-child > strong:first-child");
}

function isBoundary(element: Element): boolean {
	if (element.matches("hr," + HEADING)) return true;
	const marker = element.matches("strong") ? element : leadingLabel(element);
	const label = marker?.textContent?.trim() ?? "";
	if (element.matches("section")) {
		const heading = element.firstElementChild;
		return !!heading?.matches(HEADING) && QUESTION_TITLE.test(heading.textContent?.trim() ?? "");
	}
	return QUESTION_TITLE.test(label) || /^part\s+\([a-z0-9]+\)/i.test(label) || isAnswerTitle(label);
}

// Tight Markdown lists may interleave bare text, inline math and block elements.
function maskFollowing(start: Element): void {
	let inline: HTMLElement | null = null;
	for (let node = start.nextSibling; node;) {
		const next = node.nextSibling;
		if (node instanceof Element && isBoundary(node)) break;
		if (node instanceof HTMLElement && node.matches(BLOCK)) {
			inline = null;
			if (node.matches("ul,ol") && Array.from(node.children).some(isBoundary)) {
				for (const item of node.children) {
					if (isBoundary(item)) break;
					item.classList.add("answer-mask-content");
				}
				break;
			}
			node.classList.add("answer-mask-content");
		} else if (inline || node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()) {
			if (!inline) {
				inline = document.createElement("span");
				inline.className = "answer-mask-inline-content";
				node.before(inline);
			}
			inline.append(node);
		}
		node = next;
	}
}

function prepareAnswerBlocks(): number {
	const article = document.querySelector("#post-container .custom-md");
	if (!article) return 0;
	for (const marker of article.querySelectorAll<HTMLElement>("strong,h1,h2,h3,h4,h5,h6")) {
		if (marker.dataset.answerMaskBlock || !isAnswerTitle(marker.dataset.tocText ?? marker.textContent)) continue;
		if (marker.matches("strong")) {
			const container = marker.parentElement;
			if (!container?.matches("p,li")) continue;
			// A bold term inside a sentence is not a section label.
			let previous = marker.previousSibling;
			while (previous?.nodeType === Node.TEXT_NODE && !previous.textContent?.trim()) previous = previous.previousSibling;
			if (previous && !(previous instanceof HTMLBRElement)) continue;
			maskFollowing(marker);
			if (container.matches("p")) maskFollowing(container);
		} else {
			maskFollowing(marker);
		}
		marker.dataset.answerMaskBlock = "true";
	}
	return article.querySelectorAll("[data-answer-mask-block]").length;
}

function updateButton(answerCount: number): void {
	const available = answerCount > 0 && document.getElementById("post-container") !== null;
	document.body.classList.toggle(MASK_CLASS, enabled && available);

	if (!button) return;
	button.classList.toggle("hide", !available);
	button.classList.toggle("toggled", enabled && available);
	button.setAttribute("aria-pressed", String(enabled && available));
	const label = enabled && available ? "显示答案" : "遮盖答案";
	button.setAttribute("title", label);
	button.setAttribute("aria-label", label);
}

function refreshAnswerMask(): void {
	updateButton(prepareAnswerBlocks());
}

function toggleAnswerMask(): void {
	enabled = !enabled;
	saveState();
	refreshAnswerMask();
	button?.focus({ preventScroll: true });
}

function bindButton(): void {
	button = document.getElementById("answer-mask-btn") as HTMLButtonElement | null;
	if (!button || button.dataset.answerMaskBound) return;
	button.dataset.answerMaskBound = "true";
	button.addEventListener("click", toggleAnswerMask);
}

export function initAnswerMask(): void {
	loadState();
	bindButton();
	refreshAnswerMask();

	if (window.__answerMaskInit) return;
	window.__answerMaskInit = true;

	document.addEventListener("swup:contentReplaced", () => {
		setTimeout(initAnswerMask, 0);
	});
	document.addEventListener("astro:page-load", () => {
		setTimeout(initAnswerMask, 0);
	});
	document.addEventListener("password:decrypted", () => {
		setTimeout(initAnswerMask, 100);
	});
}
