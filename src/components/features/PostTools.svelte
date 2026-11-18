<script lang="ts">
import { onMount, tick } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import I18nKey from "@/i18n/i18nKey";
import { i18n } from "@/i18n/translation";
import {
	anchorSelection,
	clearAnnotations,
	notesMarkdown,
	type PostAnnotation,
	parseAnnotations,
	renderAnnotations,
	type TextAnchor,
	updatePrintNotes,
} from "@/utils/post-annotations";

interface Props {
	slug: string;
	title: string;
	sourceUrl?: string;
	encrypted?: boolean;
	variant?: "default" | "cover";
}

let {
	slug,
	title,
	sourceUrl = "",
	encrypted = false,
	variant = "default",
}: Props = $props();
let noteOpen = $state(false);
let note = $state("");
let annotations = $state<PostAnnotation[]>([]);
let missing = $state<string[]>([]);
let editing = $state<PostAnnotation | null>(null);
let comment = $state("");
let pending = $state<TextAnchor | null>(null);
let position = $state({ left: 0, top: 0 });
let saveState = $state<"saved" | "error" | "">("");
let locked = $state(encrypted);
let busy = $state(false);
let exportError = $state("");
let removed = $state<{ item: PostAnnotation; index: number } | null>(null);
let toolsElement: HTMLDivElement;
let textarea = $state<HTMLTextAreaElement>();
let container: HTMLElement | null = null;
let article: HTMLElement | null = null;
let observer: MutationObserver | undefined;
let selectionTimer: ReturnType<typeof setTimeout>;
let refreshTimer: ReturnType<typeof setTimeout>;
let restoreTitle: string | null = null;

function syncPrint() {
	if (container) updatePrintNotes(container, note, annotations);
}

function refresh() {
	observer?.disconnect();
	article = locked
		? null
		: (container?.querySelector<HTMLElement>(".markdown-content") ?? null);
	if (article) {
		missing = renderAnnotations(article, annotations);
		observer?.observe(article, { childList: true, subtree: true });
	}
	syncPrint();
}

function saveGeneral() {
	try {
		localStorage.setItem(`post-note:${slug}`, note);
		saveState = "saved";
	} catch {
		saveState = "error";
	}
	syncPrint();
}

function persistAnnotations() {
	try {
		localStorage.setItem(
			`post-annotations:${slug}`,
			JSON.stringify(annotations),
		);
		saveState = "saved";
	} catch {
		// Keep the current session's data usable and exportable even without storage.
		saveState = "error";
	}
	refresh();
}

function captureSelection() {
	if (noteOpen || locked || !article) return;
	const selection = window.getSelection();
	if (!selection || selection.isCollapsed || !selection.rangeCount) {
		pending = null;
		return;
	}
	const range = selection.getRangeAt(0);
	pending = anchorSelection(article, range);
	if (!pending) return;
	const rect = range.getBoundingClientRect();
	position = {
		left: Math.max(8, Math.min(rect.left, window.innerWidth - 160)),
		top: Math.max(8, Math.min(rect.bottom + 8, window.innerHeight - 52)),
	};
}

async function openNotes(annotation: PostAnnotation | null = null) {
	editing = annotation;
	comment = annotation?.comment ?? "";
	pending = null;
	noteOpen = true;
	await tick();
	textarea?.focus();
}

function addAnnotation() {
	if (!pending) return;
	const annotation: PostAnnotation = {
		...pending,
		id: crypto.randomUUID(),
		comment: "",
	};
	window.getSelection()?.removeAllRanges();
	void openNotes(annotation);
}

function commitEditor() {
	if (!editing) return;
	const updated = { ...editing, comment };
	const index = annotations.findIndex((item) => item.id === updated.id);
	annotations =
		index < 0
			? [...annotations, updated]
			: annotations.map((item) => (item.id === updated.id ? updated : item));
	editing = null;
	persistAnnotations();
}

function closeNotes() {
	commitEditor();
	noteOpen = false;
}

function deleteAnnotation(annotation: PostAnnotation) {
	const index = annotations.findIndex((item) => item.id === annotation.id);
	if (index < 0) return;
	removed = { item: annotation, index };
	annotations = annotations.filter((item) => item.id !== annotation.id);
	if (editing?.id === annotation.id) {
		editing = null;
		comment = "";
	}
	persistAnnotations();
}

function undoDelete() {
	if (!removed) return;
	const next = [...annotations];
	next.splice(removed.index, 0, removed.item);
	annotations = next;
	removed = null;
	persistAnnotations();
}

async function locate(annotation: PostAnnotation) {
	closeNotes();
	await tick();
	const mark = Array.from(
		article?.querySelectorAll<HTMLElement>("[data-note-ids]") ?? [],
	).find((node) => node.dataset.noteIds?.split(" ").includes(annotation.id));
	mark?.scrollIntoView({ block: "center", behavior: "smooth" });
	const badge = Array.from(
		article?.querySelectorAll<HTMLElement>("[data-note-marker]") ?? [],
	).find((node) => node.dataset.noteIds === annotation.id);
	badge?.focus({ preventScroll: true });
}

function handleAnnotation(event: MouseEvent | KeyboardEvent) {
	if (
		event instanceof KeyboardEvent &&
		event.key !== "Enter" &&
		event.key !== " "
	)
		return;
	if (!window.getSelection()?.isCollapsed || noteOpen) return;
	const target =
		event.target instanceof Element
			? event.target.closest<HTMLElement>("[data-note-ids]")
			: null;
	if (!target || !article?.contains(target)) return;
	const ids = target.dataset.noteIds?.split(" ") ?? [];
	const annotation = annotations.find((item) => ids.includes(item.id));
	if (!annotation) return;
	event.preventDefault();
	void openNotes(annotation);
}

function finishPrint() {
	if (restoreTitle !== null) document.title = restoreTitle;
	restoreTitle = null;
}

function preparePrint() {
	if (locked) return;
	commitEditor();
	document.querySelector<HTMLDialogElement>(".note-dialog[open]")?.close();
	noteOpen = false;
	syncPrint();
	if (restoreTitle === null) restoreTitle = document.title;
	document.title = title;
}

onMount(() => {
	container = toolsElement.closest<HTMLElement>("#post-container");
	try {
		note = localStorage.getItem(`post-note:${slug}`) ?? "";
	} catch {
		saveState = "error";
	}
	try {
		annotations = parseAnnotations(
			localStorage.getItem(`post-annotations:${slug}`),
		);
	} catch {
		saveState = "error";
	}
	locked =
		encrypted && !container?.querySelector("#decrypted-content:not(.hidden)");
	observer = new MutationObserver(() => {
		clearTimeout(refreshTimer);
		refreshTimer = setTimeout(refresh, 100);
	});
	refresh();
	const scheduleSelection = () => {
		clearTimeout(selectionTimer);
		selectionTimer = setTimeout(captureSelection, 80);
	};
	const handleDecrypted = () => {
		locked = false;
		refresh();
	};
	const storageChanged = (event: StorageEvent) => {
		if (noteOpen) return; // Do not overwrite an active draft from another tab.
		try {
			if (event.key === `post-note:${slug}`) note = event.newValue ?? "";
			if (event.key === `post-annotations:${slug}`)
				annotations = parseAnnotations(event.newValue);
			refresh();
		} catch {
			saveState = "error";
		}
	};
	document.addEventListener("selectionchange", scheduleSelection);
	document.addEventListener("pointerup", scheduleSelection);
	container?.addEventListener("click", handleAnnotation);
	container?.addEventListener("keydown", handleAnnotation);
	document.addEventListener("password:decrypted", handleDecrypted);
	window.addEventListener("resize", scheduleSelection);
	window.addEventListener("scroll", scheduleSelection, { passive: true });
	window.addEventListener("storage", storageChanged);
	window.addEventListener("beforeprint", preparePrint);
	window.addEventListener("afterprint", finishPrint);
	return () => {
		observer?.disconnect();
		clearTimeout(selectionTimer);
		clearTimeout(refreshTimer);
		if (article) clearAnnotations(article);
		document.removeEventListener("selectionchange", scheduleSelection);
		document.removeEventListener("pointerup", scheduleSelection);
		container?.removeEventListener("click", handleAnnotation);
		container?.removeEventListener("keydown", handleAnnotation);
		document.removeEventListener("password:decrypted", handleDecrypted);
		window.removeEventListener("resize", scheduleSelection);
		window.removeEventListener("scroll", scheduleSelection);
		window.removeEventListener("storage", storageChanged);
		window.removeEventListener("beforeprint", preparePrint);
		window.removeEventListener("afterprint", finishPrint);
		finishPrint();
	};
});

async function exportMarkdown() {
	if (!sourceUrl || locked || busy) return;
	busy = true;
	exportError = "";
	try {
		// Prerendered endpoints are files; a trailing slash can produce a 404 on static hosts.
		const response = await fetch(sourceUrl.replace(/\/+$/, ""));
		if (!response.ok) throw new Error("Source unavailable");
		const source = await response.text();
		if (
			/^\s*<!doctype html/i.test(source) ||
			/text\/html/i.test(response.headers.get("content-type") ?? "")
		) {
			throw new Error("Invalid source response");
		}
		const blob = new Blob([source + notesMarkdown(note, annotations)], {
			type: "text/markdown;charset=utf-8",
		});
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${title.replace(/[\\/:*?"<>|]/g, "_")}.md`;
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	} catch {
		exportError = "导出失败，请稍后重试。笔记仍保留在当前页面。";
	} finally {
		busy = false;
	}
}

async function exportPdf() {
	if (locked || busy) return;
	busy = true;
	exportError = "";
	try {
		preparePrint();
		const images = Array.from(
			article?.querySelectorAll<HTMLImageElement>("img") ?? [],
		);
		for (const image of images) image.loading = "eager";
		const loaded = Promise.all(
			images.map((image) => image.decode().catch(() => {})),
		);
		await Promise.race([
			Promise.all([document.fonts.ready, loaded]),
			new Promise<void>((resolve) => setTimeout(resolve, 5000)),
		]);
		await new Promise<void>((resolve) =>
			requestAnimationFrame(() => resolve()),
		);
		window.print();
	} catch {
		exportError = "无法打开打印窗口，请使用浏览器的打印功能。";
	} finally {
		busy = false;
		// afterprint restores the title; the listener also handles browser printing.
	}
}

function portal(node: HTMLElement) {
	document.body.appendChild(node);
	return {
		destroy() {
			node.remove();
		},
	};
}

function modal(node: HTMLDialogElement) {
	document.body.appendChild(node);
	node.showModal();
	return {
		destroy() {
			node.close();
			node.remove();
		},
	};
}
</script>

<div bind:this={toolsElement} class:cover={variant === "cover"} class="post-tools" data-no-print>
	{#if sourceUrl}
		<button type="button" class="tool-button" onclick={exportMarkdown} disabled={busy || locked} title="导出文章 Markdown，附上阅读笔记与批注">
			<Icon icon="material-symbols:markdown" class="text-base" />
			<span>{i18n(I18nKey.exportMarkdown)}</span>
		</button>
	{/if}
	<button type="button" class="tool-button" onclick={exportPdf} disabled={busy || locked}
		title={locked ? i18n(I18nKey.unlockToExportPdf) : i18n(I18nKey.pdfPrintHint)}>
		<Icon icon="material-symbols:picture-as-pdf-outline" class="text-base" />
		<span>{busy ? "正在准备…" : i18n(I18nKey.exportPdf)}</span>
	</button>
	<button type="button" class="tool-button" onclick={() => openNotes()} disabled={locked}>
		<Icon icon="material-symbols:edit-note" class="text-base" />
		<span>{i18n(I18nKey.postNotes)}{annotations.length ? " · " + annotations.length : ""}</span>
	</button>
	{#if exportError}<p class="note-status error" role="alert">{exportError}</p>{/if}
</div>

{#if pending && !noteOpen}
	<button type="button" class="selection-note" use:portal data-no-print
		style:left={position.left + "px"} style:top={position.top + "px"}
		onmousedown={(event) => event.preventDefault()} onclick={addAnnotation}>
		<Icon icon="material-symbols:edit-note" class="text-lg" />
		划线并批注
	</button>
{/if}

{#if noteOpen}
	<dialog class="note-dialog" use:modal data-no-print aria-labelledby="post-notes-dialog-title"
		oncancel={(event) => { event.preventDefault(); closeNotes(); }}>
		<header class="note-header">
			<h2 id="post-notes-dialog-title">{editing ? "划线批注" : i18n(I18nKey.postNotes)}</h2>
			<button type="button" class="note-close" aria-label={i18n(I18nKey.closeNotes)} onclick={closeNotes}>
				<Icon icon="material-symbols:close" class="text-xl" />
			</button>
		</header>
		<p class="note-article-title">{title}</p>
		{#if editing}
			<blockquote class="note-quote">{editing.quote}</blockquote>
			<label class="note-label" for="annotation-comment">注释（留空则只保留下划线）</label>
			<textarea id="annotation-comment" bind:this={textarea} bind:value={comment} class="note-textarea comment"
				placeholder="记录你对这段文字的理解、疑问或补充…" oninput={() => (saveState = "")}></textarea>
			<div class="note-editor-actions">
				<button type="button" class="note-save" onclick={() => { commitEditor(); }}>保存批注</button>
				{#if annotations.some((annotation) => annotation.id === editing?.id)}
					<button type="button" class="note-delete" onclick={() => { if (editing) deleteAnnotation(editing); }}>删除批注</button>
				{/if}
			</div>
		{:else}
			<p class="note-help">在正文中选中文字，点击“划线并批注”。点击下划线或编号可编辑；支持普通阅读和纯净阅读。</p>
			<label class="note-label" for="general-note">整篇笔记</label>
			<textarea id="general-note" bind:this={textarea} bind:value={note} class="note-textarea"
				placeholder={i18n(I18nKey.notePlaceholder)} oninput={(event) => { note = event.currentTarget.value; saveGeneral(); }}></textarea>
			<h3 class="note-label">划线批注 · {annotations.length}</h3>
			{#if !annotations.length}<p class="note-help">暂无批注，选中正文中的一段文字即可开始。</p>{/if}
			<ol class="annotation-list">
				{#each annotations as annotation, i (annotation.id)}
					<li>
						<strong>批注 {i + 1}</strong>
						<blockquote class="note-quote">{annotation.quote}</blockquote>
						<p class="annotation-comment">{annotation.comment || "仅划线"}</p>
						{#if missing.includes(annotation.id)}
							<p class="note-status error">原文已变化，暂未定位到这段文字；注释仍会导出。</p>
						{/if}
						<div class="annotation-actions">
							<button type="button" onclick={() => locate(annotation)} disabled={missing.includes(annotation.id)}>定位原文</button>
							<button type="button" onclick={() => openNotes(annotation)}>编辑</button>
							<button type="button" onclick={() => deleteAnnotation(annotation)}>删除</button>
						</div>
					</li>
				{/each}
			</ol>
			{#if removed}
				<p class="note-help">批注已删除。<button type="button" class="undo-note" onclick={undoDelete}>撤销删除</button></p>
			{/if}
			<div class="annotation-actions">
				{#if sourceUrl}<button type="button" onclick={exportMarkdown} disabled={busy}>导出 .md（含笔记）</button>{/if}
				<button type="button" onclick={() => { closeNotes(); void exportPdf(); }} disabled={busy}>导出 .pdf（含笔记）</button>
			</div>
		{/if}
		<div class="note-footer">
			<div>
				<p class="note-storage-info">笔记仅保存在当前浏览器。PDF 包含正文划线和编号注释，Markdown 附上摘录与注释。</p>
				<p class="note-status" class:saved={saveState === "saved"} class:error={saveState === "error"} role="status">
					{saveState === "error" ? i18n(I18nKey.noteSaveError) + " 可先导出备份。" : saveState === "saved" ? i18n(I18nKey.noteSaved) : ""}
				</p>
				{#if exportError}<p class="note-status error" role="alert">{exportError}</p>{/if}
			</div>
		</div>
	</dialog>
{/if}

<style>
	.post-tools {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.375rem;
		margin-left: auto;
	}

	.post-tools.cover {
		margin-left: 0;
	}

	.tool-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.3rem;
		min-height: 1.75rem;
		padding: 0.25rem 0.5rem;
		border: 0;
		border-radius: 0.375rem;
		background: rgb(0 0 0 / 0.05);
		color: rgb(0 0 0 / 0.5);
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		white-space: nowrap;
		cursor: pointer;
		transition: background-color 150ms ease;
	}

	.tool-button:hover {
		background: rgb(0 0 0 / 0.1);
	}

	.tool-button:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	:global(.dark) .tool-button {
		background: rgb(255 255 255 / 0.1);
		color: rgb(255 255 255 / 0.55);
	}

	:global(.dark) .tool-button:hover {
		background: rgb(255 255 255 / 0.16);
	}

	.post-tools.cover .tool-button,
	:global(.dark) .post-tools.cover .tool-button {
		border: 1px solid rgb(255 255 255 / 0.2);
		background: rgb(0 0 0 / 0.25);
		color: white;
	}

	.post-tools.cover .tool-button:hover,
	:global(.dark) .post-tools.cover .tool-button:hover {
		background: rgb(0 0 0 / 0.4);
	}

	.note-dialog {
		position: relative;
		width: min(42rem, calc(100vw - 2rem));
		max-height: calc(100vh - 2rem);
		max-height: calc(100dvh - 2rem);
		overflow-y: auto;
		padding: 1.25rem;
		border: 1px solid var(--line-divider);
		border-radius: 1rem;
		background: var(--card-bg);
		box-shadow: 0 24px 64px rgb(0 0 0 / 0.25);
	}

	.note-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.note-header h2 {
		margin: 0;
		color: var(--deep-text);
		font-size: 1.125rem;
		font-weight: 700;
	}

	.note-close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: 0;
		border-radius: 0.5rem;
		background: transparent;
		color: var(--deep-text);
		cursor: pointer;
	}

	.note-close:hover {
		background: rgb(0 0 0 / 0.06);
	}

	:global(.dark) .note-close:hover {
		background: rgb(255 255 255 / 0.1);
	}

	.note-article-title {
		margin: 0.5rem 0 1rem;
		overflow: hidden;
		color: var(--deep-text);
		font-size: 0.8125rem;
		opacity: 0.7;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.note-textarea {
		width: 100%;
		min-height: 8rem;
		resize: vertical;
		padding: 0.875rem;
		border: 1px solid var(--line-divider);
		border-radius: 0.75rem;
		outline: none;
		background: rgb(0 0 0 / 0.035);
		color: var(--deep-text);
		font: inherit;
		font-size: 0.875rem;
		line-height: 1.75;
	}

	.note-textarea:focus {
		border-color: var(--primary);
	}

	:global(.dark) .note-textarea {
		background: rgb(255 255 255 / 0.06);
	}

	.note-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1rem;
	}

	.note-storage-info,
	.note-status {
		margin: 0;
		font-size: 0.75rem;
		line-height: 1.4;
	}

	.note-storage-info {
		color: var(--deep-text);
		opacity: 0.7;
	}

	.note-status {
		margin-top: 0.25rem;
	}

	.note-status.saved {
		color: #159447;
	}

	.note-status.error {
		color: #dc4446;
	}

	.note-save {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		gap: 0.375rem;
		padding: 0.625rem 1rem;
		border: 0;
		border-radius: 0.625rem;
		background: var(--primary);
		color: white;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
	}

	:global(.dark) .note-save {
		color: rgb(0 0 0 / 0.7);
	}

	.note-editor-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.625rem;
		margin-top: 0.5rem;
	}

	.note-delete {
		padding: 0.625rem 1rem;
		border: 1px solid currentColor;
		border-radius: 0.625rem;
		color: #ba3033;
		background: transparent;
		font-size: 0.875rem;
		cursor: pointer;
	}

	:global(.dark) .note-delete { color: #ff999b; }

	@media (max-width: 480px) {
		.note-footer {
			align-items: stretch;
			flex-direction: column;
		}

		.note-save {
			width: 100%;
		}
	}

	.note-dialog {
		margin: auto;
		color: var(--deep-text);
	}
	:global(.dark) .note-dialog,
	:global(.dark) .selection-note {
		--deep-text: oklch(0.92 0.01 var(--hue));
	}
	:global(.dark) .note-status.saved { color: #67d99a; }
	:global(.dark) .note-status.error { color: #ff999b; }
	.note-dialog::backdrop { background: rgb(0 0 0 / 0.55); backdrop-filter: blur(4px); }
	.note-help, .note-label { color: var(--deep-text); font-size: 0.875rem; line-height: 1.65; }
	.note-help { opacity: 0.75; margin-bottom: 1rem; }
	.note-label { display: block; font-weight: 600; margin: 1rem 0 0.5rem; }
	.note-quote { margin: 0.75rem 0; padding: 0.5rem 0.75rem; border-left: 3px solid var(--primary); background: var(--btn-plain-bg-hover); white-space: pre-wrap; overflow-wrap: anywhere; max-height: 12rem; overflow-y: auto; }
	.annotation-list { list-style: none; padding: 0; }
	.annotation-list li { padding: 1rem 0; border-bottom: 1px solid var(--line-divider); }
	.annotation-comment { white-space: pre-wrap; overflow-wrap: anywhere; }
	.annotation-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem; }
	.annotation-actions button, .undo-note { border-radius: 0.5rem; padding: 0.4rem 0.7rem; background: var(--btn-plain-bg-hover); color: var(--primary); cursor: pointer; }
	.annotation-actions button:disabled { opacity: 0.5; cursor: not-allowed; }
	.selection-note { position: fixed; z-index: 1200; display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 0.8rem; border: 1px solid var(--line-divider); border-radius: 0.6rem; box-shadow: 0 4px 20px rgb(0 0 0 / 0.2); color: var(--deep-text); background: var(--card-bg); cursor: pointer; }
	button:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }
</style>
