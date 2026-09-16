"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Beat 00 — INERT → ASSEMBLY.
 *
 * The first viewport is a title plate, not a hero card. No background photo,
 * no glass panel, no 3D object parked beside a paragraph: oversized type set
 * against the live structure, with a specification column that doubles as
 * the crawlable capability list.
 *
 * Every word here is real DOM. The animation only moves it.
 */

const LINES = [
  { text: "WE BUILD", stroke: false },
  { text: "DIGITAL", stroke: false },
  { text: "SYSTEMS", stroke: true },
];

const SPEC: [string, string][] = [
  ["Discipline", "Web development & digital systems"],
  ["Services", "Web · AI automation · SEO · SMM"],
  ["Based", "Faisalabad, Pakistan"],
  ["Working", "Pakistan and international"],
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // A slow index counter in the corner. It is the only ambient motion in the
  // first viewport, and it exists to suggest a running system rather than a
  // static page. One moving element, not twelve.
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % 1000), 90);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-10 min-h-[100svh] flex flex-col justify-between pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="section-label mb-10 md:mb-14"
        >
          Buildron — Digital Systems Agency
        </motion.p>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-end">
          {/* --- The plate ------------------------------------------- */}
          <h1 className="font-display font-bold tracking-tightest leading-[0.86] text-[17vw] sm:text-[13vw] lg:text-[9.2vw] xl:text-[8.4rem]">
            {LINES.map((l, i) => (
              <span key={l.text} className="line-mask">
                <span
                  className={`line-rise ${l.stroke ? "text-stroke" : ""}`}
                  style={{ animationDelay: `${0.25 + i * 0.11}s` }}
                >
                  {l.text}
                </span>
              </span>
            ))}
            <span className="sr-only">
              {" "}
              — web development, AI automation, SEO, social media marketing, ecommerce and ERP software for businesses in Pakistan.
            </span>
          </h1>

          {/* --- The specification ----------------------------------- */}
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[290px] shrink-0 border-t border-line pt-5 text-sm"
          >
            {SPEC.map(([k, v]) => (
              <div key={k} className="flex gap-4 py-2 border-b border-line/70 last:border-0">
                <dt className="w-[86px] shrink-0 text-[11px] uppercase tracking-[0.18em] text-mist pt-0.5">
                  {k}
                </dt>
                <dd className="text-paper/90 leading-snug">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 max-w-xl text-lg md:text-xl text-mist leading-relaxed"
        >
          We build business websites, web applications, ecommerce stores, ERP software, AI automation, SEO and social media systems — designed to turn searchers, visitors and enquiries into a working business pipeline.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <WhatsAppButton message="Hi Buildron, I want to start a project." location="hero">
            Start a Project
          </WhatsAppButton>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2.5 font-medium rounded-full border border-line hover:border-volt text-paper px-7 py-3.5 text-sm hover:bg-charcoal transition-all"
          >
            See the work
          </Link>
        </motion.div>
      </div>

      {/* --- Baseline rule: the page's own measuring device ---------- */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="max-w-7xl mx-auto px-6 lg:px-10 w-full mt-16"
      >
        <div className="rule mb-3" />
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-mist">
          <span>Beat 00 — System inert</span>
          <span className="hidden sm:inline">Scroll to assemble</span>
          <span className="tabular-nums" aria-hidden="true">
            {String(tick).padStart(3, "0")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
