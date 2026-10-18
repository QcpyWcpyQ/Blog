import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

type RippleSettings = NonNullable<
	NonNullable<BackgroundWallpaperConfig["common"]>["homeWaterRipple"]
>;

const vertexSource = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
	gl_Position = vec4(a_position, 0.0, 1.0);
	v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);
}`;

// The original scene's waterripple shader, with MASK/PERSPECTIVE/SPECULAR off.
// The source texture and normal map are extracted unchanged from scene.pkg.
const fragmentSource = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_image;
uniform sampler2D u_normal;
uniform vec4 u_crop;
uniform vec4 u_settings;
uniform float u_aspect;
uniform float u_time;
void main() {
	vec2 uv = u_crop.xy + v_uv * u_crop.zw;
	float phase = u_time * u_settings.x * u_settings.x;
	vec2 scale = vec2(u_aspect, u_settings.w) * u_settings.y;
	vec3 n1 = texture2D(u_normal, (uv + phase) * scale).xyz * 2.0 - 1.0;
	vec3 n2 = texture2D(u_normal, (uv * 1.333 - phase) * scale).xyz * 2.0 - 1.0;
	vec3 normal = normalize(vec3(n1.xy + n2.xy, n1.z));
	uv += normal.xy * u_settings.z * u_settings.z;
	gl_FragColor = texture2D(u_image, uv);
}`;

function createRenderer(
	canvas: HTMLCanvasElement,
	image: HTMLImageElement,
	normalMap: HTMLImageElement,
	settings: RippleSettings,
) {
	const context = canvas.getContext("webgl", {
		alpha: false,
		antialias: false,
		depth: false,
		powerPreference: "low-power",
	});
	if (!context) throw new Error("WebGL is unavailable");
	const gl: WebGLRenderingContext = context;
	const shaders: WebGLShader[] = [];
	const textures: WebGLTexture[] = [];
	const program = gl.createProgram();
	const buffer = gl.createBuffer();
	const destroy = () => {
		for (const texture of textures) gl.deleteTexture(texture);
		for (const shader of shaders) gl.deleteShader(shader);
		gl.deleteBuffer(buffer);
		gl.deleteProgram(program);
	};

	try {
		if (!program || !buffer)
			throw new Error("Cannot allocate wallpaper renderer");
		for (const [type, source] of [
			[gl.VERTEX_SHADER, vertexSource],
			[gl.FRAGMENT_SHADER, fragmentSource],
		] as const) {
			const shader = gl.createShader(type);
			if (!shader) throw new Error("Cannot allocate wallpaper shader");
			shaders.push(shader);
			const precision = gl.getShaderPrecisionFormat(
				gl.FRAGMENT_SHADER,
				gl.HIGH_FLOAT,
			);
			gl.shaderSource(
				shader,
				precision?.precision ? source : source.replace("highp", "mediump"),
			);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				throw new Error(
					gl.getShaderInfoLog(shader) || "Cannot compile wallpaper shader",
				);
			}
			gl.attachShader(program, shader);
		}
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			throw new Error(
				gl.getProgramInfoLog(program) || "Cannot link wallpaper shader",
			);
		}
		gl.useProgram(program);
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);
		const position = gl.getAttribLocation(program, "a_position");
		gl.enableVertexAttribArray(position);
		gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

		for (const [index, source] of [image, normalMap].entries()) {
			const texture = gl.createTexture();
			if (!texture) throw new Error("Cannot allocate wallpaper texture");
			textures.push(texture);
			gl.activeTexture(gl.TEXTURE0 + index);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(
				gl.TEXTURE_2D,
				0,
				gl.RGBA,
				gl.RGBA,
				gl.UNSIGNED_BYTE,
				source,
			);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			const wrap = index === 0 ? gl.CLAMP_TO_EDGE : gl.REPEAT;
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
		}
		gl.uniform1i(gl.getUniformLocation(program, "u_image"), 0);
		gl.uniform1i(gl.getUniformLocation(program, "u_normal"), 1);
		gl.uniform4f(
			gl.getUniformLocation(program, "u_settings"),
			settings.animationSpeed,
			settings.scale,
			settings.strength,
			settings.ratio,
		);
		gl.uniform1f(
			gl.getUniformLocation(program, "u_aspect"),
			image.naturalWidth / image.naturalHeight,
		);
		const timeUniform = gl.getUniformLocation(program, "u_time");
		const cropUniform = gl.getUniformLocation(program, "u_crop");

		return {
			destroy,
			resize() {
				const { width, height } = canvas.getBoundingClientRect();
				if (!width || !height) return;
				const resolution = Math.min(
					window.devicePixelRatio || 1,
					1.5,
					1920 / width,
					1080 / height,
				);
				canvas.width = Math.max(1, Math.round(width * resolution));
				canvas.height = Math.max(1, Math.round(height * resolution));
				gl.viewport(0, 0, canvas.width, canvas.height);
				const cover = Math.max(
					width / image.naturalWidth,
					height / image.naturalHeight,
				);
				const imageWidth = image.naturalWidth * cover;
				const imageHeight = image.naturalHeight * cover;
				const [x = "50%", y = "50%"] =
					getComputedStyle(image).objectPosition.split(" ");
				const offset = (value: string, space: number) =>
					value.endsWith("%")
						? (Number.parseFloat(value) / 100) * space
						: Number.parseFloat(value) || 0;
				gl.uniform4f(
					cropUniform,
					-offset(x, width - imageWidth) / imageWidth,
					-offset(y, height - imageHeight) / imageHeight,
					width / imageWidth,
					height / imageHeight,
				);
			},
			draw(time: number) {
				gl.uniform1f(timeUniform, time);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			},
		};
	} catch (error) {
		destroy();
		throw error;
	}
}

export function initHomeWaterRipple(root: HTMLElement): () => void {
	const canvasElement = root.querySelector("canvas");
	if (!canvasElement) return () => {};
	const canvas: HTMLCanvasElement = canvasElement;
	const settings = JSON.parse(root.dataset.settings || "{}") as RippleSettings;
	const motion = matchMedia("(prefers-reduced-motion: reduce)");
	let image = root.querySelector("img");
	let renderer: ReturnType<typeof createRenderer> | undefined;
	let frame = 0;
	let lastFrame = 0;
	let elapsed = 0;
	let visible = false;
	let loading = false;
	let failed = false;
	let disposed = false;
	let contextLost = false;

	const isActivePage = () =>
		document.body.classList.contains("is-home") ||
		(settings.showOnPostPage && document.body.classList.contains("is-post"));
	const canPlay = () =>
		visible &&
		!document.hidden &&
		!motion.matches &&
		isActivePage() &&
		document.documentElement.dataset.wallpaperMode !== "none" &&
		!document.body.hasAttribute("data-bg-video-playing") &&
		!contextLost;

	function pause() {
		cancelAnimationFrame(frame);
		frame = 0;
		lastFrame = 0;
		root.dataset.state = "paused";
	}

	function draw(now: number) {
		frame = 0;
		if (!canPlay() || !renderer) return;
		frame = requestAnimationFrame(draw);
		if (now - lastFrame < 1000 / 30) return;
		if (lastFrame) elapsed += Math.min((now - lastFrame) / 1000, 0.1);
		lastFrame = now;
		renderer.draw(elapsed);
		root.dataset.state = "playing";
		root.toggleAttribute("data-animated", true);
	}

	async function loadRenderer() {
		if (!image || loading || failed) return;
		loading = true;
		try {
			const normalMap = new Image();
			normalMap.src = root.dataset.normalMap || "";
			await Promise.all([image.decode(), normalMap.decode()]);
			if (disposed || contextLost) return;
			renderer = createRenderer(canvas, image, normalMap, settings);
			renderer.resize();
		} catch (error) {
			failed = true;
			console.warn("[Wallpaper] Keeping the static wallpaper:", error);
		} finally {
			loading = false;
			if (!disposed) sync();
		}
	}

	function sync() {
		if (disposed) return;
		if (isActivePage() && !image) {
			image = new Image(3440, 1440);
			image.alt = "";
			image.decoding = "async";
			image.src = root.dataset.image || "";
			root.prepend(image);
		}
		if (!canPlay()) {
			pause();
			if (motion.matches) root.removeAttribute("data-animated");
			return;
		}
		if (!renderer) {
			void loadRenderer();
			return;
		}
		renderer.resize();
		if (!frame) frame = requestAnimationFrame(draw);
	}

	const intersection = new IntersectionObserver(([entry]) => {
		visible = entry.isIntersecting;
		sync();
	});
	intersection.observe(root);
	const resize = new ResizeObserver(sync);
	resize.observe(root);
	// The wallpaper persists outside Swup's replaced containers. Observe the
	// page/mode attributes so visits in either direction work.
	const state = new MutationObserver(sync);
	state.observe(document.body, {
		attributes: true,
		attributeFilter: ["class", "data-bg-video-playing"],
	});
	state.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-wallpaper-mode"],
	});

	function onContextLost(event: Event) {
		event.preventDefault();
		contextLost = true;
		pause();
		renderer = undefined;
		root.removeAttribute("data-animated");
	}
	function onContextRestored() {
		contextLost = false;
		failed = false;
		sync();
	}
	canvas.addEventListener("webglcontextlost", onContextLost);
	canvas.addEventListener("webglcontextrestored", onContextRestored);
	document.addEventListener("visibilitychange", sync);
	motion.addEventListener("change", sync);
	sync();

	return () => {
		disposed = true;
		pause();
		intersection.disconnect();
		resize.disconnect();
		state.disconnect();
		document.removeEventListener("visibilitychange", sync);
		motion.removeEventListener("change", sync);
		canvas.removeEventListener("webglcontextlost", onContextLost);
		canvas.removeEventListener("webglcontextrestored", onContextRestored);
		renderer?.destroy();
	};
}
