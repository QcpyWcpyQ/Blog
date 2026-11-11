import "@/styles/math-source-menu.css";

/** KaTeX keeps the original TeX in its MathML annotation; never copy visual glyphs. */
function getMathSource(target: EventTarget | null): string | null {
	if (!(target instanceof Element) || !target.closest(".custom-md"))
		return null;
	const formula = target.closest(".katex, .katex-error");
	if (!formula) return null;
	return (
		formula.querySelector('annotation[encoding="application/x-tex"]')
			?.textContent ??
		(formula.classList.contains("katex-error") ? formula.textContent : null)
	);
}

/** Document delegation also works after Swup navigation and post decryption. */
export function initMathSourceMenu(): void {
	if (document.getElementById("math-source-menu")) return;

	const menu = document.createElement("div");
	menu.id = "math-source-menu";
	menu.hidden = true;
	menu.setAttribute("role", "menu");
	menu.setAttribute("aria-label", "公式");

	const copyButton = document.createElement("button");
	copyButton.type = "button";
	copyButton.setAttribute("role", "menuitem");
	copyButton.textContent = "复制 LaTeX 源码";
	const viewButton = copyButton.cloneNode() as HTMLButtonElement;
	viewButton.textContent = "查看公式源码";
	menu.append(copyButton, viewButton);

	const dialog = document.createElement("dialog");
	dialog.className = "math-source-dialog";
	dialog.setAttribute("aria-labelledby", "math-source-title");
	const header = document.createElement("header");
	const title = document.createElement("h2");
	title.id = "math-source-title";
	title.textContent = "LaTeX 公式源码";
	const closeButton = document.createElement("button");
	closeButton.type = "button";
	closeButton.textContent = "关闭";
	const sourceField = document.createElement("textarea");
	sourceField.readOnly = true;
	sourceField.spellcheck = false;
	sourceField.setAttribute("aria-label", "LaTeX 公式源码");
	const footer = document.createElement("footer");
	const hint = document.createElement("p");
	hint.setAttribute("role", "status");
	const dialogCopyButton = document.createElement("button");
	dialogCopyButton.type = "button";
	dialogCopyButton.textContent = "复制源码";
	header.append(title, closeButton);
	footer.append(hint, dialogCopyButton);
	dialog.append(header, sourceField, footer);

	const status = document.createElement("div");
	status.id = "math-copy-status";
	status.setAttribute("role", "status");
	status.setAttribute("aria-live", "polite");
	document.body.append(menu, dialog, status);

	let source = "";
	let previousFocus: HTMLElement | null = null;
	let statusTimer: ReturnType<typeof setTimeout>;

	function closeMenu(restoreFocus = false): void {
		menu.hidden = true;
		if (restoreFocus && previousFocus?.isConnected) {
			previousFocus.focus({ preventScroll: true });
		}
	}

	function showSource(
		value: string,
		message = "可直接复制，或选中文本后手动复制。",
	): void {
		closeMenu();
		sourceField.value = value;
		hint.textContent = message;
		if (!dialog.open) dialog.showModal();
		sourceField.focus();
		sourceField.select();
	}

	async function copySource(value: string): Promise<void> {
		let copied = false;
		try {
			await navigator.clipboard.writeText(value);
			copied = true;
		} catch {
			// Manual selection remains available when clipboard permission is denied.
			copied = false;
		}
		if (!copied) {
			showSource(value, "自动复制未成功，源码已选中，请按 Ctrl/Cmd+C 复制。");
			return;
		}
		if (dialog.open) {
			hint.textContent = "已复制 LaTeX 源码";
			dialogCopyButton.focus();
		} else {
			closeMenu(true);
			status.textContent = "已复制 LaTeX 源码";
			clearTimeout(statusTimer);
			statusTimer = setTimeout(() => {
				status.textContent = "";
			}, 2400);
		}
	}

	document.addEventListener("contextmenu", (event) => {
		const value = getMathSource(event.target);
		if (value === null) {
			closeMenu();
			return;
		}
		event.preventDefault();
		source = value;
		previousFocus =
			document.activeElement instanceof HTMLElement
				? document.activeElement
				: null;
		menu.hidden = false;
		// Measure after displaying and keep the entire menu inside the viewport.
		const bounds = menu.getBoundingClientRect();
		const targetBounds = (event.target as Element).getBoundingClientRect();
		const x = event.clientX || targetBounds.left;
		const y = event.clientY || targetBounds.bottom;
		menu.style.left =
			Math.max(8, Math.min(x, window.innerWidth - bounds.width - 8)) + "px";
		menu.style.top =
			Math.max(8, Math.min(y, window.innerHeight - bounds.height - 8)) + "px";
		copyButton.focus({ preventScroll: true });
	});

	copyButton.addEventListener("click", () => {
		void copySource(source);
	});
	viewButton.addEventListener("click", () => {
		showSource(source);
	});
	dialogCopyButton.addEventListener("click", () => {
		void copySource(sourceField.value);
	});
	closeButton.addEventListener("click", () => {
		dialog.close();
	});
	dialog.addEventListener("close", () => {
		if (previousFocus?.isConnected)
			previousFocus.focus({ preventScroll: true });
	});
	dialog.addEventListener("click", (event) => {
		if (event.target !== dialog) return;
		const { left, right, top, bottom } = dialog.getBoundingClientRect();
		if (
			event.clientX < left ||
			event.clientX > right ||
			event.clientY < top ||
			event.clientY > bottom
		)
			dialog.close();
	});

	document.addEventListener("pointerdown", (event) => {
		if (!menu.contains(event.target as Node)) closeMenu();
	});
	document.addEventListener("keydown", (event) => {
		if (menu.hidden) return;
		const buttons = [copyButton, viewButton];
		const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
		if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
			event.preventDefault();
			const next =
				event.key === "Home"
					? 0
					: event.key === "End"
						? 1
						: (index + (event.key === "ArrowDown" ? 1 : -1) + 2) % 2;
			buttons[next].focus();
		} else if (event.key === "Escape") {
			event.preventDefault();
			closeMenu(true);
		} else if (event.key === "Tab") {
			closeMenu(true);
		}
	});
	document.addEventListener(
		"scroll",
		() => {
			closeMenu();
		},
		{ capture: true, passive: true },
	);
	window.addEventListener("resize", () => {
		closeMenu();
	});
	function reset(): void {
		closeMenu();
		if (dialog.open) dialog.close();
		clearTimeout(statusTimer);
		status.textContent = "";
	}
	document.addEventListener("astro:page-load", reset);
	document.addEventListener("swup:contentReplaced", reset);
}
