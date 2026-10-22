/** Keep every voice line, splitting long quotes at punctuation for the hero. */
export function splitHeroQuotes(text: string | string[], limit = 32): string[] {
	const segmenter = new Intl.Segmenter("zh", { granularity: "grapheme" });
	return (Array.isArray(text) ? text : [text]).flatMap((quote) => {
		const remaining = Array.from(
			segmenter.segment(quote.trim()),
			(part) => part.segment,
		);
		const chunks: string[] = [];
		while (remaining.length > limit) {
			const window = remaining.slice(0, limit);
			const punctuation = window.findLastIndex((char) =>
				/[，。！？；、,.!?;…]/u.test(char),
			);
			const end = punctuation >= 9 ? punctuation + 1 : limit;
			chunks.push(remaining.splice(0, end).join(""));
		}
		if (remaining.length) chunks.push(remaining.join(""));
		return chunks;
	});
}
