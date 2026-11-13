const STORAGE_KEY = "answer-mask-enabled";
const MASK_CLASS = "answers-masked";
const ANSWER_TITLE = /^(solution|proof)\b/i;

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

function directChildContaining(parent: Element, child: Element): HTMLElement | null {
	let current: HTMLElement | null = child.parentElement;
	while (current && current.parentElement !== parent) {
		current = current.parentElement;
	}
	return current?.parentElement === parent ? current : null;
}

function prepareListAnswers(article: Element): void {
	const markers = article.querySelectorAll<HTMLElement>(
		"strong[data-toc-entry][id]",
	);
	for (const marker of markers) {
		if (!isAnswerTitle(marker.textContent)) continue;

		const item = marker.closest("li");
		if (!item || !article.contains(item)) continue;
		if (item.dataset.answerMaskBlock === "list") continue;

		const headingContainer = directChildContaining(item, marker);
		if (!headingContainer) continue;

		item.dataset.answerMaskBlock = "list";
		headingContainer.classList.add("answer-mask-heading");

		// Markdown commonly places the label and the first sentence in one <p>.
		// Keep the label sharp and wrap only the nodes that follow it.
		if (!headingContainer.dataset.answerMaskInlineReady) {
			headingContainer.dataset.answerMaskInlineReady = "true";
			const inlineContent = document.createElement("span");
			inlineContent.className = "answer-mask-inline-content";
			while (marker.nextSibling) inlineContent.append(marker.nextSibling);
			if (inlineContent.childNodes.length > 0) {
				headingContainer.append(inlineContent);
			}
		}

		let sibling = headingContainer.nextElementSibling;
		while (sibling) {
			sibling.classList.add("answer-mask-content");
			sibling = sibling.nextElementSibling;
		}
	}
}

function headingLevel(element: Element): number | null {
	const match = /^H([1-6])$/.exec(element.tagName);
	return match ? Number(match[1]) : null;
}

function prepareHeadingAnswers(article: Element): void {
	const headings = article.querySelectorAll<HTMLElement>("h1, h2, h3, h4, h5, h6");
	for (const heading of headings) {
		if (!isAnswerTitle(heading.textContent)) continue;
		if (heading.dataset.answerMaskBlock === "heading") continue;

		const level = headingLevel(heading);
		if (level === null) continue;
		heading.dataset.answerMaskBlock = "heading";
		heading.classList.add("answer-mask-heading");

		let sibling = heading.nextElementSibling;
		while (sibling) {
			const siblingLevel = headingLevel(sibling);
			if (siblingLevel !== null && siblingLevel <= level) break;
			sibling.classList.add("answer-mask-content");
			sibling = sibling.nextElementSibling;
		}
	}
}

function prepareAnswerBlocks(): number {
	const article = document.querySelector("#post-container .custom-md");
	if (!article) return 0;

	prepareListAnswers(article);
	prepareHeadingAnswers(article);
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
