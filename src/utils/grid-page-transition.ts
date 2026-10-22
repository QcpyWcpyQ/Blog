import { isArticleDetailPage } from "@/utils/url-utils";

type GridVisit = {
	animation: { animate: boolean };
	from: { url: string };
	to: { url: string };
	history: { popstate: boolean };
};

/** Full curtain for sections; frequent reading navigation only fades in. */
function usesLightTransition(visit: GridVisit): boolean {
	const from = new URL(visit.from.url, location.href);
	const to = new URL(visit.to.url, location.href);
	return (
		(isArticleDetailPage(from.pathname) && isArticleDetailPage(to.pathname)) ||
		from.pathname === to.pathname ||
		(/^\/\d+\/?$/.test(from.pathname) && to.pathname === "/") ||
		/\/(archive|search|page|category|tag)(\/|$)/.test(to.pathname) ||
		/^\/\d+\/?$/.test(to.pathname)
	);
}

export function registerGridPageTransition(): void {
	const curtain = document.getElementById("grid-page-transition");
	const feedback = document.getElementById("page-transition-feedback");
	const emblem = curtain?.querySelector<HTMLElement>(".page-transition-emblem");
	const message = feedback?.querySelector<HTMLElement>("[data-message]");
	const retry = feedback?.querySelector<HTMLAnchorElement>("[data-retry]");
	const dismiss = feedback?.querySelector<HTMLButtonElement>("[data-dismiss]");
	if (
		!curtain ||
		!emblem ||
		!feedback ||
		!message ||
		!retry ||
		!dismiss ||
		curtain.dataset.initialized
	)
		return;
	curtain.dataset.initialized = "true";
	const tiles = [...curtain.querySelectorAll<HTMLElement>("[data-tile]")];
	const html = document.documentElement;
	const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
	const hooks = window.swup.hooks;
	let activeVisit: GridVisit | null = null;
	let mode = "none";
	let animations: Animation[] = [];
	let covered: Promise<unknown> = Promise.resolve();
	let watchdog: number | undefined;
	let loadingTimer: number | undefined;
	let entering = false;
	const delays = [60, 30, 60, 30, 0, 30, 60, 30, 60];

	const reset = (): void => {
		activeVisit = null;
		window.clearTimeout(watchdog);
		window.clearTimeout(loadingTimer);
		curtain.dataset.phase = "idle";
		html.removeAttribute("data-page-transition");
		html.removeAttribute("data-page-phase");
		html.style.removeProperty("--page-overlay-opacity");
		html.style.removeProperty("--page-overlay-transform");
		html.classList.remove("is-page-transitioning");
		feedback.hidden = true;
		for (const animation of animations) animation.cancel();
		animations = [];
	};
	const showError = (visit: GridVisit): void => {
		if (activeVisit !== visit) return;
		reset();
		html.setAttribute("data-page-transition", "none");
		feedback.dataset.error = "true";
		message.textContent = "页面暂时未能打开，请重试。";
		retry.href = visit.to.url;
		retry.hidden = dismiss.hidden = false;
		feedback.hidden = false;
	};
	dismiss.addEventListener("click", () => {
		feedback.hidden = true;
	});

	async function play(
		element: Element,
		frames: Keyframe[],
		options: KeyframeAnimationOptions,
	): Promise<void> {
		const animation = element.animate(frames, { fill: "both", ...options });
		animations.push(animation);
		try {
			await animation.finished;
		} catch {
			/* Cancelled by a newer visit. */
		}
	}
	const scheduleFeedback = (visit: GridVisit): void => {
		loadingTimer = window.setTimeout(() => {
			if (activeVisit !== visit || entering) return;
			message.textContent = "正在打开页面…";
			feedback.hidden = false;
		}, 800);
	};

	hooks.on("visit:start", (visit: GridVisit) => {
		reset();
		activeVisit = visit;
		entering = false;
		delete feedback.dataset.error;
		retry.hidden = dismiss.hidden = true;
		mode =
			!visit.animation.animate || motion.matches || visit.history.popstate
				? "none"
				: usesLightTransition(visit)
					? "fade"
					: "grid";
		const overlay = document.getElementById("banner-overlay-container");
		if (overlay) {
			const style = getComputedStyle(overlay);
			html.style.setProperty("--page-overlay-opacity", style.opacity);
			html.style.setProperty("--page-overlay-transform", style.transform);
		}
		html.setAttribute("data-page-phase", "covering");
		html.setAttribute("data-page-transition", mode);
		watchdog = window.setTimeout(() => showError(visit), 10000);
		if (mode !== "grid") {
			covered = Promise.resolve();
			scheduleFeedback(visit);
			return;
		}
		curtain.dataset.phase = "covering";
		// Emblem fades independently and never extends the navigation budget.
		void play(emblem, [{ opacity: 0 }, { opacity: 1 }], {
			duration: 200,
			delay: 140,
			easing: "ease-out",
		});
		covered = Promise.all(
			tiles.map((tile, index) =>
				play(tile, [{ transform: "scale(0)" }, { transform: "scale(1)" }], {
					duration: 280,
					delay: delays[index],
					easing: "cubic-bezier(0.76, 0, 0.24, 1)",
				}),
			),
		).then(() => {
			if (activeVisit !== visit) return;
			if (mode !== "grid") return;
			curtain.dataset.phase = "covered";
			scheduleFeedback(visit);
		});
	});

	hooks.replace("animation:out:await", (visit: GridVisit) =>
		activeVisit === visit ? covered : undefined,
	);
	hooks.before("content:replace", (visit: GridVisit) => {
		if (activeVisit !== visit) return;
		entering = true;
		html.setAttribute("data-page-phase", "entering");
		window.clearTimeout(loadingTimer);
		window.clearTimeout(watchdog);
		feedback.hidden = true;
	});
	hooks.replace("animation:in:await", async (visit: GridVisit) => {
		if (activeVisit !== visit) return;
		await covered;
		if (activeVisit !== visit) return;
		for (const node of document.querySelectorAll<HTMLElement>(
			".onload-animation",
		)) {
			node.style.animation = "none";
			node.style.opacity = "1";
		}
		if (mode === "grid") {
			curtain.dataset.phase = "revealing";
			void play(emblem, [{ opacity: 1 }, { opacity: 0 }], {
				duration: 140,
				easing: "ease-in",
			});
			await Promise.all(
				tiles.map((tile, index) =>
					play(tile, [{ transform: "scale(1)" }, { transform: "scale(0)" }], {
						duration: 240,
						delay: 60 - delays[index],
						easing: "cubic-bezier(0.76, 0, 0.24, 1)",
					}),
				),
			);
		} else if (mode === "fade") {
			const content = document.getElementById("swup-container");
			if (content)
				await play(content, [{ opacity: 0 }, { opacity: 1 }], {
					duration: 200,
					easing: "ease-out",
				});
		}
		if (activeVisit === visit) reset();
	});
	for (const event of ["visit:abort", "visit:end"]) {
		hooks.on(event, (visit: GridVisit) => {
			if (activeVisit === visit) reset();
		});
	}
	for (const event of ["fetch:error", "fetch:timeout"])
		hooks.on(event, showError);
	// Also catch offline/DNS failures; retain Swup's native-navigation recovery.
	hooks.replace(
		"page:load",
		async (
			visit: GridVisit,
			args: unknown,
			handler: (visit: GridVisit, args: unknown) => Promise<unknown>,
		) => {
			try {
				return await handler(visit, args);
			} catch (error) {
				showError(visit);
				throw error;
			}
		},
	);
	hooks.on("disable", reset);
	window.addEventListener("pagehide", reset);
	window.addEventListener("pageshow", reset);
	motion.addEventListener("change", () => {
		for (const animation of animations) animation.cancel();
		mode = "none";
		curtain.dataset.phase = "idle";
		if (activeVisit) html.setAttribute("data-page-transition", "none");
	});
}
