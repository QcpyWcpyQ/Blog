/** A persistent nine-tile curtain shared by all Swup page visits. */
type GridVisit = { animation: { animate: boolean } };

export function registerGridPageTransition(): void {
	const curtain = document.getElementById("grid-page-transition");
	if (!curtain || curtain.dataset.initialized) return;
	curtain.dataset.initialized = "true";

	const tiles = [...curtain.querySelectorAll<HTMLElement>("[data-tile]")];
	const emblem = curtain.querySelector<HTMLImageElement>(
		"[data-transition-emblem]",
	);
	if (tiles.length !== 9 || !emblem) return;

	const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
	const hooks = window.swup.hooks;
	let activeVisit: GridVisit | null = null;
	let animations: Animation[] = [];
	let covered: Promise<unknown> = Promise.resolve();
	let watchdog: number | undefined;
	// Center first, then edges, then corners: each tile scales around its center.
	const delays = [120, 60, 120, 60, 0, 60, 120, 60, 120];

	const reset = (): void => {
		activeVisit = null;
		window.clearTimeout(watchdog);
		curtain.dataset.phase = "idle";
		document.documentElement.removeAttribute("data-grid-transition");
		for (const animation of animations) animation.cancel();
		animations = [];
	};

	async function play(
		element: Element,
		frames: Keyframe[],
		options: KeyframeAnimationOptions,
	): Promise<void> {
		const animation = element.animate(frames, { fill: "both", ...options });
		animations.push(animation);
		// Cancellation is expected for interrupted navigation and page restoration.
		try {
			await animation.finished;
		} catch {
			// Cancelled animations finish this stage without blocking Swup.
		}
	}

	hooks.on("visit:start", (visit: GridVisit) => {
		reset();
		if (!visit.animation.animate || motion.matches) return;
		activeVisit = visit;
		curtain.dataset.phase = "covering";
		document.documentElement.setAttribute("data-grid-transition", "");
		// A failed request must never leave a blocking curtain behind.
		watchdog = window.setTimeout(reset, 10000);
		covered = Promise.all([
			...tiles.map((tile, index) =>
				play(tile, [{ transform: "scale(0)" }, { transform: "scale(1)" }], {
					duration: 440,
					delay: delays[index],
					easing: "cubic-bezier(0.76, 0, 0.24, 1)",
				}),
			),
			play(emblem, [{ opacity: 0 }, { opacity: 1 }], {
				duration: 520,
				delay: 180,
				easing: "cubic-bezier(0.45, 0, 0.55, 1)",
			}),
		]).then(() => {
			if (activeVisit === visit) curtain.dataset.phase = "covered";
		});
	});

	// Swup starts fetching in parallel and cannot replace the page until covered.
	hooks.on("animation:out:await", (visit: GridVisit) =>
		activeVisit === visit ? covered : undefined,
	);

	hooks.on("animation:in:await", async (visit: GridVisit) => {
		if (activeVisit !== visit) return;
		await covered;
		if (activeVisit !== visit) return;
		document.documentElement.classList.remove("is-page-transitioning");
		// 新内容已在幕布后就位，不要在揭幕后重播原有的淡入。
		for (const node of document.querySelectorAll<HTMLElement>(
			".onload-animation",
		)) {
			node.style.animation = "none";
			node.style.opacity = "1";
		}
		curtain.dataset.phase = "revealing";
		await Promise.all(
			tiles.map((tile, index) =>
				play(tile, [{ transform: "scale(1)" }, { transform: "scale(0)" }], {
					duration: 420,
					delay: 120 - delays[index],
					easing: "cubic-bezier(0.76, 0, 0.24, 1)",
				}),
			),
		);
		if (activeVisit === visit) reset();
	});

	for (const event of [
		"visit:abort",
		"visit:end",
		"fetch:error",
		"fetch:timeout",
	]) {
		hooks.on(event, (visit: GridVisit) => {
			if (activeVisit === visit) reset();
		});
	}
	hooks.on("animation:skip", reset);
	hooks.on("disable", reset);
	window.addEventListener("pagehide", reset);
	window.addEventListener("pageshow", reset);
	motion.addEventListener("change", reset);
}
