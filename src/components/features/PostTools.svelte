<script lang="ts">
import { onMount, tick } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import I18nKey from "@/i18n/i18nKey";
import { i18n } from "@/i18n/translation";

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
let savedNote = $state("");
let saveState = $state<"saved" | "error" | "">("");
let storageError = $state(false);
let locked = $state(true);
let textarea = $state<HTMLTextAreaElement>();

onMount(() => {
	try {
		savedNote = localStorage.getItem(`post-note:${slug}`) ?? "";
		note = savedNote;
	} catch {
		storageError = true;
	}

	const handleDecrypted = () => {
		locked = false;
	};
	locked =
		encrypted && !document.querySelector("#decrypted-content:not(.hidden)");
	document.addEventListener("password:decrypted", handleDecrypted);

	return () => {
		document.removeEventListener("password:decrypted", handleDecrypted);
	};
});

async function openNotes() {
	noteOpen = true;
	if (storageError) saveState = "error";
	await tick();
	textarea?.focus();
}

function closeNotes() {
	noteOpen = false;
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === "Escape" && noteOpen) closeNotes();
}

function saveNote() {
	try {
		localStorage.setItem(`post-note:${slug}`, note);
		savedNote = note;
		storageError = false;
		saveState = "saved";
		return true;
	} catch {
		storageError = true;
		saveState = "error";
		return false;
	}
}

async function exportPdf() {
	if (encrypted && locked) return;
	if (noteOpen && note !== savedNote) saveNote();

	const noteText = noteOpen ? note : savedNote;
	const printNotes = document.querySelector<HTMLElement>(
		"[data-post-print-notes]",
	);
	const printNotesContent = printNotes?.querySelector<HTMLElement>(
		"[data-post-print-notes-content]",
	);
	if (printNotes && printNotesContent) {
		printNotesContent.textContent = noteText;
		printNotes.dataset.hasNote = String(Boolean(noteText.trim()));
	}

	const postContainer = document.getElementById("post-container");
	const images = Array.from(
		postContainer?.querySelectorAll<HTMLImageElement>("img") ?? [],
	);
	for (const image of images) image.loading = "eager";

	await document.fonts.ready;
	await Promise.race([
		Promise.all(
			images
				.filter((image) => !image.complete)
				.map(
					(image) =>
						new Promise<void>((resolve) => {
							image.addEventListener("load", () => resolve(), { once: true });
							image.addEventListener("error", () => resolve(), { once: true });
						}),
				),
		),
		new Promise<void>((resolve) => setTimeout(resolve, 3000)),
	]);

	requestAnimationFrame(() => window.print());
}

function portal(node: HTMLElement) {
	document.body.appendChild(node);
	return {
		destroy() {
			node.remove();
		},
	};
}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class:cover={variant === "cover"} class="post-tools" data-no-print>
	{#if sourceUrl}
		<a
			class="tool-button"
			href={sourceUrl}
			download={`${title}.md`}
			title={i18n(I18nKey.exportMarkdown)}
		>
			<Icon icon="material-symbols:markdown" class="text-base" />
			<span>{i18n(I18nKey.exportMarkdown)}</span>
		</a>
	{/if}
	<button
		type="button"
		class="tool-button"
		onclick={exportPdf}
		disabled={encrypted && locked}
		title={encrypted && locked
			? i18n(I18nKey.unlockToExportPdf)
			: i18n(I18nKey.pdfPrintHint)}
	>
		<Icon icon="material-symbols:picture-as-pdf-outline" class="text-base" />
		<span>{i18n(I18nKey.exportPdf)}</span>
	</button>
	<button
		type="button"
		class="tool-button"
		onclick={openNotes}
		title={i18n(I18nKey.postNotes)}
	>
		<Icon icon="material-symbols:edit-note" class="text-base" />
		<span>{i18n(I18nKey.postNotes)}</span>
	</button>
</div>

{#if noteOpen}
	<div class="note-modal" use:portal data-no-print>
		<button
			type="button"
			class="note-backdrop"
			aria-label={i18n(I18nKey.closeNotes)}
			onclick={closeNotes}
		></button>
		<div
			class="note-dialog"
			role="dialog"
			aria-modal="true"
			aria-labelledby="post-notes-dialog-title"
		>
			<header class="note-header">
				<h2 id="post-notes-dialog-title">{i18n(I18nKey.postNotes)}</h2>
				<button
					type="button"
					class="note-close"
					aria-label={i18n(I18nKey.closeNotes)}
					onclick={closeNotes}
				>
					<Icon icon="material-symbols:close" class="text-xl" />
				</button>
			</header>
			<p class="note-article-title">{title}</p>
			<textarea
				bind:this={textarea}
				bind:value={note}
				class="note-textarea"
				placeholder={i18n(I18nKey.notePlaceholder)}
				oninput={() => (saveState = "")}
			></textarea>
			<div class="note-footer">
				<div>
					<p class="note-storage-info">{i18n(I18nKey.noteStorageInfo)}</p>
					{#if saveState === "saved"}
						<p class="note-status saved">{i18n(I18nKey.noteSaved)}</p>
					{:else if saveState === "error"}
						<p class="note-status error">{i18n(I18nKey.noteSaveError)}</p>
					{/if}
				</div>
				<button type="button" class="note-save" onclick={saveNote}>
					<Icon icon="material-symbols:save-outline" class="text-lg" />
					<span>{i18n(I18nKey.saveNote)}</span>
				</button>
			</div>
		</div>
	</div>
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

	.note-modal {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.note-backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgb(0 0 0 / 0.55);
		backdrop-filter: blur(4px);
		cursor: default;
	}

	.note-dialog {
		position: relative;
		width: min(42rem, 100%);
		max-height: calc(100vh - 2rem);
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
		opacity: 0.55;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.note-textarea {
		width: 100%;
		min-height: 16rem;
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
		opacity: 0.45;
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

	@media (max-width: 480px) {
		.note-footer {
			align-items: stretch;
			flex-direction: column;
		}

		.note-save {
			width: 100%;
		}
	}
</style>
