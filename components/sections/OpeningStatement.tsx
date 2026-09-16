"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function OpeningStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p style={reduce ? {} : { x }} className="section-label mb-8">
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tightest leading-[1.0] text-4xl sm:text-6xl lg:text-7xl max-w-5xl"
        >
          DIGITAL IS NO LONGER JUST A{" "}
          <span className="text-stroke">WEBSITE.</span>
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-paper/90 leading-relaxed font-light"
          >
            Your website, software, automation and customer experience should
            work together as one system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {["Design", "Development", "AI", "Automation", "Business Systems"].map(
              (t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="px-4 py-2 rounded-full border border-line text-sm text-mist hover:border-volt/60 hover:text-paper transition-colors cursor-default"
                >
                  {t}
                </motion.span>
              )
            )}
          </motion.div>
        </div>

        <div className="mt-16 glow-line" />
      </div>
    </section>
  );
}
