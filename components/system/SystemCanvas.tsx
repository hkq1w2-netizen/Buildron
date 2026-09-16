"use client";

import { useEffect, useRef, useState } from "react";
import type { EngineHandle } from "@/lib/gl/engine";

/**
 * The single persistent visual layer for the whole homepage.
 *
 * There is exactly one of these. Every section scrolls over the same
 * structure rather than each section owning its own animation, which is what
 * makes the page read as one continuous system instead of a stack of
 * unrelated scroll effects.
 *
 * It is decorative by contract: aria-hidden, no text, no content. Remove it
 * and the page is still complete.
 */
export default function SystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<EngineHandle | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let cleanupScroll: (() => void) | undefined;

    // The GL bundle is code-split and only requested after the browser is
    // idle, so it can never compete with first paint of the real content.
    const boot = async () => {
      try {
        const { createEngine } = await import("@/lib/gl/engine");
        if (cancelled) return;
        const engine = createEngine(canvas, { reducedMotion: reduced });
        if (!engine || cancelled) return;
        engineRef.current = engine;
        setLive(true);

        const root = document.querySelector<HTMLElement>("[data-narrative]");
        let ticking = false;

        const measure = () => {
          const el = root ?? document.body;
          const total = Math.max(1, el.scrollHeight - window.innerHeight);
          const p = Math.min(1, Math.max(0, window.scrollY / total));
          engine.setProgress(p);
          document.documentElement.style.setProperty("--scene-progress", p.toFixed(4));
          ticking = false;
        };

        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(measure);
        };

        const onPointer = (e: PointerEvent) => {
          engine.setPointer(
            (e.clientX / window.innerWidth) * 2 - 1,
            -((e.clientY / window.innerHeight) * 2 - 1),
          );
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        if (!window.matchMedia("(pointer: coarse)").matches) {
          window.addEventListener("pointermove", onPointer, { passive: true });
        }
        measure();

        // The single dark scene tells the renderer to invert its palette,
        // so the structure crosses the boundary instead of disappearing.
        const darkSection = document.querySelector("[data-scene='dark']");
        let io: IntersectionObserver | undefined;
        if (darkSection) {
          io = new IntersectionObserver(
            (entries) => entries.forEach((en) => engine.setTheme(en.intersectionRatio > 0.45)),
            { threshold: [0, 0.45, 0.8] },
          );
          io.observe(darkSection);
        }

        cleanupScroll = () => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
          window.removeEventListener("pointermove", onPointer);
          io?.disconnect();
        };
      } catch {
        /* No WebGL2, blocked context, or a shader failure: the static
           fallback below is already on screen and stays. */
      }
    };

    // Safari still lacks requestIdleCallback, so fall back to a timeout that
    // lands well after first paint either way.
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    const useIdle = typeof w.requestIdleCallback === "function";
    const handle = useIdle
      ? w.requestIdleCallback!(() => void boot(), { timeout: 1500 })
      : window.setTimeout(() => void boot(), 320);

    return () => {
      cancelled = true;
      if (useIdle) w.cancelIdleCallback?.(handle);
      else window.clearTimeout(handle);
      cleanupScroll?.();
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      data-system-layer
    >
      {/* Static fallback: a printed drafting plate. If WebGL never boots —
          old device, blocked context, reduced-motion preference — the page
          still sits on a deliberate engineered ground rather than on blank. */}
      <div
        className={`absolute inset-0 grid-bg transition-opacity duration-1000 ${
          live ? "opacity-[0.55]" : "opacity-100"
        }`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-brand ${
          live ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Ivory vignette keeps type legible wherever the structure gets dense. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_40%,transparent_35%,rgba(246,244,239,0.72)_100%)]" />
    </div>
  );
}
