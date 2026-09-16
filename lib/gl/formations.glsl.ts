/**
 * The BUILDron world, expressed as pure mathematics.
 *
 * Every visual in the immersive layer is generated from a node index and a
 * stable per-node seed. There are no 3D model files, no textures and no
 * external assets — which is both the honest answer to "we have no asset
 * library" and the more interesting answer creatively: the structure can
 * morph continuously because it was never a fixed mesh to begin with.
 *
 * Seven formations, one per narrative beat. The vertex shader blends between
 * consecutive formations, so the visitor never sees a scene "reset" — the
 * same nodes and the same struts reconfigure the whole way down the page.
 */
export const FORMATIONS_GLSL = /* glsl */ `
const float PI = 3.141592653589793;

// Cheap stable hash — deterministic per node, no texture lookup.
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

vec3 hash31(float p) {
  return vec3(hash11(p), hash11(p + 17.13), hash11(p + 41.77));
}

// --- Beat 0 — INERT: unstructured fragments, no relationship to each other.
vec3 fScatter(float i, vec3 s) {
  vec3 d = normalize(s * 2.0 - 1.0 + 0.0001);
  return d * (2.6 + s.x * 5.4);
}

// --- Beat 1 — ASSEMBLY: a clean cubic lattice. Order emerges.
vec3 fLattice(float i, vec3 s) {
  float n = 13.0;
  float ix = mod(i, n);
  float iy = mod(floor(i / n), n);
  float iz = floor(i / (n * n));
  vec3 g = vec3(ix, iy, mod(iz, n)) / (n - 1.0) - 0.5;
  return g * 4.6;
}

// --- Beat 2 — STRUCTURE: the lattice resolves into architectural slabs.
//     This is "we build the thing people actually see": web, product surface.
vec3 fSlabs(float i, vec3 s) {
  float plane = floor(mod(i, 3.0));
  float k = floor(i / 3.0);
  float cols = 26.0;
  float x = mod(k, cols) / (cols - 1.0) - 0.5;
  float y = floor(k / cols) / 22.0 - 0.5;
  return vec3(x * 5.2, y * 3.4 + (plane - 1.0) * 0.14, (plane - 1.0) * 1.5 + s.z * 0.08);
}

// --- Beat 3 — NETWORK: nodes lift onto shells and start exchanging.
//     Automation: the structure begins to move work between its own parts.
vec3 fNetwork(float i, vec3 s) {
  float shell = floor(s.x * 3.0);
  float r = 1.5 + shell * 0.85;
  float a = i * 2.399963;              // golden-angle distribution
  float y = 1.0 - (mod(i, 400.0) / 399.0) * 2.0;
  float rad = sqrt(max(0.0, 1.0 - y * y));
  return vec3(cos(a) * rad, y, sin(a) * rad) * r;
}

// --- Beat 4 — DATA: a dense addressable grid. The ERP beat, and the one
//     deliberately dark scene. Records, not decoration.
vec3 fDataGrid(float i, vec3 s) {
  float cols = 34.0;
  float x = mod(i, cols) / (cols - 1.0) - 0.5;
  float row = floor(i / cols);
  float y = mod(row, 30.0) / 29.0 - 0.5;
  float z = floor(row / 30.0) * 0.5 - 0.5;
  return vec3(x * 6.4, y * 3.8, z);
}

// --- Beat 5 — GROWTH: the system extends beyond its own boundary.
vec3 fGrowth(float i, vec3 s) {
  float a = i * 2.399963;
  float t = mod(i, 900.0) / 899.0;
  float r = 0.6 + pow(t, 0.55) * 4.4;
  float y = (s.y - 0.5) * 1.1 + sin(t * PI * 2.0) * 0.5;
  return vec3(cos(a) * r, y, sin(a) * r);
}

// --- Beat 6 — RESOLVE: everything compresses into one dense, calm object.
//     The control point. The system is finished and it holds together.
vec3 fResolve(float i, vec3 s) {
  float a = i * 2.399963;
  float y = 1.0 - (mod(i, 700.0) / 699.0) * 2.0;
  float rad = sqrt(max(0.0, 1.0 - y * y));
  float r = 1.35 + s.z * 0.06;
  return vec3(cos(a) * rad, y, sin(a) * rad) * r;
}

vec3 formation(int id, float i, vec3 s) {
  if (id <= 0) return fScatter(i, s);
  if (id == 1) return fLattice(i, s);
  if (id == 2) return fSlabs(i, s);
  if (id == 3) return fNetwork(i, s);
  if (id == 4) return fDataGrid(i, s);
  if (id == 5) return fGrowth(i, s);
  return fResolve(i, s);
}

/**
 * Resolve a node's world position for the current narrative progress.
 * Nodes are intentionally desynchronised by their seed so the structure
 * reconfigures like something being rebuilt, not like a slide transition.
 */
vec3 nodePosition(float i, vec3 s, float progress, float time, vec2 pointer) {
  float span = progress * 6.0;
  float stagger = (s.x - 0.5) * 0.42;
  float local = clamp(span - float(int(span)) + stagger, 0.0, 1.0);
  int a = int(clamp(floor(span), 0.0, 6.0));
  int b = int(clamp(floor(span) + 1.0, 0.0, 6.0));

  float e = local * local * (3.0 - 2.0 * local);   // smoothstep
  vec3 p = mix(formation(a, i, s), formation(b, i, s), e);

  // Living drift — the structure breathes even when the page is still.
  float w = 0.055 + 0.05 * (1.0 - abs(progress - 0.5) * 2.0);
  p += vec3(
    sin(time * 0.42 + i * 0.13),
    cos(time * 0.37 + i * 0.21),
    sin(time * 0.31 + i * 0.17)
  ) * w;

  // Pointer proximity pushes the lattice open. Interaction reinforces the
  // idea that the system responds, rather than being a background video.
  vec2 d = p.xy - pointer * 3.2;
  float f = exp(-dot(d, d) * 0.55);
  p.xy += normalize(d + 0.0001) * f * 0.55;
  p.z += f * 0.3;

  return p;
}

// How "live" a node is: activation sweeps through the structure with scroll.
float nodeActivation(float i, vec3 s, float progress, float time) {
  float front = progress * 1.35 - 0.12;
  float own = s.y * 0.85 + s.z * 0.15;
  float a = smoothstep(own - 0.22, own + 0.05, front);
  float pulse = 0.5 + 0.5 * sin(time * 1.6 + i * 0.37);
  return clamp(a * (0.62 + 0.38 * pulse), 0.0, 1.0);
}
`;
