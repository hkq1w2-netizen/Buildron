/**
 * BUILDron immersive runtime — a purpose-built WebGL2 renderer.
 *
 * DEVIATION FROM THE BRIEF'S DEFAULT STACK, AND WHY:
 * The brief nominated Three.js + React Three Fiber. That was the right
 * default for an unknown scene, but the scene turned out to be one thing:
 * a single procedural lattice of points and struts with no models, no
 * textures, no lights, no materials and no post-processing. Three + R3F +
 * drei would have added roughly 350–450KB gzipped to carry features this
 * scene never uses, on a site whose audience is largely on mid-tier Android
 * over Pakistani mobile networks.
 *
 * So the renderer is hand-written: ~8KB, two draw calls per frame, all
 * geometry resolved on the GPU from a node index. Performance is part of
 * the art direction here, not a trade against it.
 *
 * Contract: this module owns a canvas and nothing else. It never renders
 * text, never renders content, and can be removed entirely without the site
 * losing a single crawlable or readable word.
 */

import { FORMATIONS_GLSL } from "./formations.glsl";

export type QualityTier = "high" | "medium" | "low";

export type EngineHandle = {
  setProgress: (p: number) => void;
  setPointer: (x: number, y: number) => void;
  setTheme: (dark: boolean) => void;
  destroy: () => void;
  tier: QualityTier;
};

/* ------------------------------------------------------------------ */
/* Device tiering — three levels, never a binary "3D off".             */
/* ------------------------------------------------------------------ */

export function detectTier(gl: WebGL2RenderingContext): QualityTier {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 4;
  const mem = nav.deviceMemory ?? 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 820;

  let renderer = "";
  try {
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    if (ext) renderer = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? "").toLowerCase();
  } catch {
    /* Privacy-hardened browsers block this; the other signals still apply. */
  }

  const weakGpu = /(adreno [1-5]|mali-[tg]?[0-6]|powervr|swiftshader|llvmpipe|软件)/.test(renderer);

  if (weakGpu || cores <= 2 || mem <= 2) return "low";
  if (coarse || narrow || cores <= 4 || mem <= 4) return "medium";
  return "high";
}

const TIER_CONFIG: Record<QualityTier, { nodes: number; links: number; dpr: number }> = {
  high: { nodes: 2600, links: 3, dpr: 2 },
  medium: { nodes: 1300, links: 2, dpr: 1.6 },
  low: { nodes: 560, links: 1, dpr: 1.25 },
};

/* ------------------------------------------------------------------ */
/* Minimal matrix maths — only what a single camera needs.             */
/* ------------------------------------------------------------------ */

function perspective(fovy: number, aspect: number, near: number, far: number): Float32Array {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  // prettier-ignore
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ]);
}

function lookAt(eye: number[], center: number[], up: number[]): Float32Array {
  const z = norm(sub(eye, center));
  const x = norm(cross(up, z));
  const y = cross(z, x);
  // prettier-ignore
  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1,
  ]);
}

const sub = (a: number[], b: number[]) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: number[], b: number[]) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
function norm(a: number[]) {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
function mul(a: Float32Array, b: Float32Array): Float32Array {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      o[c * 4 + r] =
        a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
    }
  }
  return o;
}

/* ------------------------------------------------------------------ */
/* Camera choreography — one continuous directed path, not an orbit.   */
/* ------------------------------------------------------------------ */

type Key = { at: number; eye: [number, number, number]; target: [number, number, number] };

/**
 * The camera is authored as keyframes against narrative progress, so it
 * behaves like a directed shot list: pull back off the assembly, track the
 * slabs, push inside the network, sit low in the data grid, rise over the
 * growth, then settle square-on for the closing control point.
 */
const CAMERA: Key[] = [
  { at: 0.0, eye: [0, 0.2, 5.4], target: [0, 0, 0] },
  { at: 0.17, eye: [1.9, 1.5, 7.4], target: [0, 0, 0] },
  { at: 0.34, eye: [0.2, 0.6, 5.0], target: [0, 0, 0] },
  { at: 0.5, eye: [-1.4, 0.3, 2.9], target: [0, 0, 0] },
  { at: 0.66, eye: [0, -1.5, 4.4], target: [0, 0.3, 0] },
  { at: 0.83, eye: [2.6, 2.4, 8.6], target: [0, 0, 0] },
  { at: 1.0, eye: [0, 0, 5.0], target: [0, 0, 0] },
];

function cameraAt(p: number): { eye: number[]; target: number[] } {
  let i = 0;
  while (i < CAMERA.length - 2 && p > CAMERA[i + 1].at) i++;
  const a = CAMERA[i];
  const b = CAMERA[i + 1];
  const raw = (p - a.at) / Math.max(1e-5, b.at - a.at);
  const t = Math.min(1, Math.max(0, raw));
  const e = t * t * (3 - 2 * t);
  const lerp3 = (u: number[], v: number[]) => [
    u[0] + (v[0] - u[0]) * e,
    u[1] + (v[1] - u[1]) * e,
    u[2] + (v[2] - u[2]) * e,
  ];
  return { eye: lerp3(a.eye, b.eye), target: lerp3(a.target, b.target) };
}

/* ------------------------------------------------------------------ */
/* Shaders                                                             */
/* ------------------------------------------------------------------ */

const COMMON_UNIFORMS = /* glsl */ `
uniform mat4 uViewProj;
uniform float uTime;
uniform float uProgress;
uniform vec2 uPointer;
uniform float uPixelScale;
uniform vec3 uInk;
uniform vec3 uPaper;
uniform vec3 uVolt;
uniform float uDark;
`;

const NODE_VERT = `#version 300 es
precision highp float;
in float aIndex;
in vec3 aSeed;
${COMMON_UNIFORMS}
out float vActive;
out float vFog;
void main() {
  vec3 p = nodePosition(aIndex, aSeed, uProgress, uTime, uPointer);
  vActive = nodeActivation(aIndex, aSeed, uProgress, uTime);
  vec4 clip = uViewProj * vec4(p, 1.0);
  gl_Position = clip;
  float dist = max(0.6, clip.w);
  vFog = clamp(1.0 - (dist - 2.2) / 9.0, 0.0, 1.0);
  gl_PointSize = (2.0 + vActive * 4.2) * uPixelScale / dist * 2.4;
}`;

const NODE_FRAG = `#version 300 es
precision highp float;
in float vActive;
in float vFog;
${COMMON_UNIFORMS}
out vec4 outColor;
void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = dot(uv, uv);
  if (d > 1.0) discard;
  float core = smoothstep(1.0, 0.05, d);
  // Graphite by default; cobalt only where the system is genuinely active.
  vec3 base = mix(uPaper, uVolt, smoothstep(0.45, 1.0, vActive));
  float a = core * vFog * (0.30 + 0.70 * vActive);
  outColor = vec4(base, a);
}`;

const LINK_VERT = `#version 300 es
precision highp float;
in float aIndex;
in vec3 aSeed;
in float aEnd;
${COMMON_UNIFORMS}
out float vActive;
out float vFog;
out float vEnd;
void main() {
  vec3 p = nodePosition(aIndex, aSeed, uProgress, uTime, uPointer);
  vActive = nodeActivation(aIndex, aSeed, uProgress, uTime);
  vEnd = aEnd;
  vec4 clip = uViewProj * vec4(p, 1.0);
  gl_Position = clip;
  vFog = clamp(1.0 - (max(0.6, clip.w) - 2.2) / 9.0, 0.0, 1.0);
}`;

const LINK_FRAG = `#version 300 es
precision highp float;
in float vActive;
in float vFog;
in float vEnd;
${COMMON_UNIFORMS}
out vec4 outColor;
void main() {
  // Struts are structure, so they stay graphite and quiet; cobalt is
  // reserved for the moments where load is actually moving through them.
  vec3 c = mix(uPaper, uVolt, smoothstep(0.6, 1.0, vActive));
  float a = vFog * (0.055 + 0.16 * vActive) * (uDark > 0.5 ? 1.9 : 1.0);
  outColor = vec4(c, a);
}`;

/* ------------------------------------------------------------------ */
/* Engine                                                              */
/* ------------------------------------------------------------------ */

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(`Shader compile failed: ${log}`);
  }
  return sh;
}

function program(gl: WebGL2RenderingContext, vs: string, fs: string) {
  // The formation library is injected after the #version line of each stage.
  const inject = (src: string) => src.replace(/(precision highp float;)/, `$1\n${FORMATIONS_GLSL}`);
  const p = gl.createProgram()!;
  gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, inject(vs)));
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, inject(fs)));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    throw new Error(`Program link failed: ${gl.getProgramInfoLog(p)}`);
  }
  return p;
}

const hex = (h: string): [number, number, number] => [
  parseInt(h.slice(1, 3), 16) / 255,
  parseInt(h.slice(3, 5), 16) / 255,
  parseInt(h.slice(5, 7), 16) / 255,
];

export function createEngine(canvas: HTMLCanvasElement, opts: { reducedMotion: boolean }): EngineHandle | null {
  const ctx = canvas.getContext("webgl2", {
    antialias: true,
    alpha: true,
    premultipliedAlpha: false,
    powerPreference: "high-performance",
    failIfMajorPerformanceCaveat: false,
  });
  if (!ctx) return null;
  const gl: WebGL2RenderingContext = ctx;

  const tier = detectTier(gl);
  const cfg = TIER_CONFIG[tier];
  const N = cfg.nodes;

  /* --- Node attributes -------------------------------------------- */
  const idx = new Float32Array(N);
  const seed = new Float32Array(N * 3);
  let r = 20240921;
  const rnd = () => {
    r = (r * 1664525 + 1013904223) >>> 0;
    return r / 4294967296;
  };
  for (let i = 0; i < N; i++) {
    idx[i] = i;
    seed[i * 3] = rnd();
    seed[i * 3 + 1] = rnd();
    seed[i * 3 + 2] = rnd();
  }

  /* --- Struts: each node linked to a few near-in-index neighbours,
         which in the cubic lattice reads as real structural bracing. --- */
  const pairs: number[] = [];
  for (let i = 0; i < N; i++) {
    for (let k = 1; k <= cfg.links; k++) {
      const j = k === 1 ? i + 1 : i + 13 * k;
      if (j < N) pairs.push(i, j);
    }
  }
  const L = pairs.length;
  const lIdx = new Float32Array(L);
  const lSeed = new Float32Array(L * 3);
  const lEnd = new Float32Array(L);
  for (let v = 0; v < L; v++) {
    const n = pairs[v];
    lIdx[v] = n;
    lSeed[v * 3] = seed[n * 3];
    lSeed[v * 3 + 1] = seed[n * 3 + 1];
    lSeed[v * 3 + 2] = seed[n * 3 + 2];
    lEnd[v] = v % 2;
  }

  const buf = (data: Float32Array) => {
    const b = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return b;
  };

  let nodeProg: WebGLProgram;
  let linkProg: WebGLProgram;
  try {
    nodeProg = program(gl, NODE_VERT, NODE_FRAG);
    linkProg = program(gl, LINK_VERT, LINK_FRAG);
  } catch (err) {
    // A shader failure must degrade to the static page, never to a crash.
    if (process.env.NODE_ENV !== "production") console.warn("[buildron/gl]", err);
    return null;
  }

  const bind = (prog: WebGLProgram, attrs: { name: string; buffer: WebGLBuffer; size: number }[]) => {
    const vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);
    for (const a of attrs) {
      const loc = gl.getAttribLocation(prog, a.name);
      if (loc < 0) continue;
      gl.bindBuffer(gl.ARRAY_BUFFER, a.buffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, a.size, gl.FLOAT, false, 0, 0);
    }
    gl.bindVertexArray(null);
    return vao;
  };

  const nodeVao = bind(nodeProg, [
    { name: "aIndex", buffer: buf(idx), size: 1 },
    { name: "aSeed", buffer: buf(seed), size: 3 },
  ]);
  const linkVao = bind(linkProg, [
    { name: "aIndex", buffer: buf(lIdx), size: 1 },
    { name: "aSeed", buffer: buf(lSeed), size: 3 },
    { name: "aEnd", buffer: buf(lEnd), size: 1 },
  ]);

  const U = (p: WebGLProgram) => ({
    uViewProj: gl.getUniformLocation(p, "uViewProj"),
    uTime: gl.getUniformLocation(p, "uTime"),
    uProgress: gl.getUniformLocation(p, "uProgress"),
    uPointer: gl.getUniformLocation(p, "uPointer"),
    uPixelScale: gl.getUniformLocation(p, "uPixelScale"),
    uInk: gl.getUniformLocation(p, "uInk"),
    uPaper: gl.getUniformLocation(p, "uPaper"),
    uVolt: gl.getUniformLocation(p, "uVolt"),
    uDark: gl.getUniformLocation(p, "uDark"),
  });
  const nodeU = U(nodeProg);
  const linkU = U(linkProg);

  /* --- State ------------------------------------------------------- */
  let progress = 0;
  let progressEased = 0;
  let pointer: [number, number] = [0, 0];
  let pointerEased: [number, number] = [0, 0];
  let dark = 0;
  let darkEased = 0;
  let dpr = 1;
  let running = true;
  let raf = 0;
  let last = performance.now();
  let t = 0;

  // Adaptive quality: if frames get expensive, shed DPR before shedding
  // the experience. Measured, not guessed.
  let slowFrames = 0;
  let dprScale = 1;

  const INK = hex("#f6f4ef");
  const PAPER = hex("#14161a");
  const VOLT = hex("#1e3aff");
  const DARK_PAPER = hex("#e8e6e1");

  function resize() {
    const cap = Math.min(window.devicePixelRatio || 1, cfg.dpr) * dprScale;
    dpr = Math.max(1, cap);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }

  function frame(now: number) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    if (dt > 0.032) slowFrames++;
    else slowFrames = Math.max(0, slowFrames - 1);
    if (slowFrames > 45 && dprScale > 0.62) {
      dprScale -= 0.18;
      slowFrames = 0;
      resize();
    }

    t += opts.reducedMotion ? 0 : dt;

    // Critically-damped-ish smoothing so scroll never feels mechanical.
    const k = 1 - Math.pow(0.0015, dt);
    progressEased += (progress - progressEased) * k;
    pointerEased[0] += (pointer[0] - pointerEased[0]) * k;
    pointerEased[1] += (pointer[1] - pointerEased[1]) * k;
    darkEased += (dark - darkEased) * (1 - Math.pow(0.02, dt));

    resize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);

    const { eye, target } = cameraAt(progressEased);
    // Pointer adds a gentle parallax on the camera itself — the world
    // acknowledges the visitor without turning into a toy.
    const aspect = canvas.width / Math.max(1, canvas.height);
    const view = lookAt(
      [eye[0] + pointerEased[0] * 0.5, eye[1] + pointerEased[1] * 0.35, eye[2]],
      target,
      [0, 1, 0],
    );
    const proj = perspective((aspect < 0.85 ? 62 : 46) * (Math.PI / 180), aspect, 0.1, 100);
    const vp = mul(proj, view);

    const paper: [number, number, number] = [
      PAPER[0] + (DARK_PAPER[0] - PAPER[0]) * darkEased,
      PAPER[1] + (DARK_PAPER[1] - PAPER[1]) * darkEased,
      PAPER[2] + (DARK_PAPER[2] - PAPER[2]) * darkEased,
    ];

    const setU = (u: ReturnType<typeof U>, scale: number) => {
      gl.uniformMatrix4fv(u.uViewProj, false, vp);
      gl.uniform1f(u.uTime, t);
      gl.uniform1f(u.uProgress, progressEased);
      gl.uniform2f(u.uPointer, pointerEased[0], pointerEased[1]);
      gl.uniform1f(u.uPixelScale, scale);
      gl.uniform3fv(u.uInk, INK);
      gl.uniform3fv(u.uPaper, paper);
      gl.uniform3fv(u.uVolt, VOLT);
      gl.uniform1f(u.uDark, darkEased);
    };

    // Struts first, nodes over them — joints should read as the top layer.
    gl.useProgram(linkProg);
    setU(linkU, dpr);
    gl.bindVertexArray(linkVao);
    gl.drawArrays(gl.LINES, 0, L);

    gl.useProgram(nodeProg);
    setU(nodeU, dpr);
    gl.bindVertexArray(nodeVao);
    gl.drawArrays(gl.POINTS, 0, N);

    gl.bindVertexArray(null);
    raf = requestAnimationFrame(frame);
  }

  resize();
  raf = requestAnimationFrame(frame);

  const onResize = () => resize();
  window.addEventListener("resize", onResize, { passive: true });

  // Never burn a phone battery rendering a tab nobody is looking at.
  const onVisibility = () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
    } else if (!running) {
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };
  document.addEventListener("visibilitychange", onVisibility);

  const onLost = (e: Event) => {
    e.preventDefault();
    running = false;
    cancelAnimationFrame(raf);
  };
  canvas.addEventListener("webglcontextlost", onLost);

  return {
    tier,
    setProgress: (p) => {
      progress = Math.min(1, Math.max(0, p));
    },
    setPointer: (x, y) => {
      pointer = [x, y];
    },
    setTheme: (d) => {
      dark = d ? 1 : 0;
    },
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onLost);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}
