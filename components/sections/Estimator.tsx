"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/lib/whatsapp";

const NEEDS = ["Website", "E-commerce", "Web Application", "ERP / Business Software", "AI Automation", "AI Agent", "SEO", "Social Media", "Custom System"];
const STAGES = ["Starting", "Growing", "Established", "Scaling"];
const BUDGETS = ["Under Rs. 50k", "Rs. 50k–100k", "Rs. 100k–250k", "Rs. 250k+"];

export default function Estimator() {
  const [need, setNeed] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const done = need && stage && budget;
  const message = [
    "Hi Buildron, I'd like to discuss a project.",
    "",
    `Need: ${need}`,
    `Business stage: ${stage}`,
    `Budget: ${budget}`,
  ].join("\n");

  const reset = () => { setNeed(null); setStage(null); setBudget(null); };

  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Project Estimator"
          title="SCOPE IT IN 30 SECONDS."
          align="center"
        />

        <div className="mt-14 space-y-10">
          <Reveal>
            <div>
              <p className="text-sm font-medium text-mist mb-4">
                <span className="text-voltsoft font-mono mr-2">01</span>
                What do you need?
              </p>
              <div className="flex flex-wrap gap-2.5">
                {NEEDS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setNeed(n)}
                    className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
                      need === n
                        ? "border-volt bg-volt/15 text-paper"
                        : "border-line text-mist hover:border-volt/50 hover:text-paper"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-medium text-mist mb-4">
                <span className="text-voltsoft font-mono mr-2">02</span>
                What stage is your business at?
              </p>
              <div className="flex flex-wrap gap-2.5">
                {STAGES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStage(s)}
                    className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
                      stage === s
                        ? "border-volt bg-volt/15 text-paper"
                        : "border-line text-mist hover:border-volt/50 hover:text-paper"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-sm font-medium text-mist mb-4">
                <span className="text-voltsoft font-mono mr-2">03</span>
                Approximate budget?
              </p>
              <div className="flex flex-wrap gap-2.5">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
                      budget === b
                        ? "border-volt bg-volt/15 text-paper"
                        : "border-line text-mist hover:border-volt/50 hover:text-paper"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 rounded-2xl card-border bg-charcoal/50 p-10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 glow-line w-2/3" />
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
                LET'S DISCUSS YOUR PROJECT.
              </h3>
              <p className="mt-4 text-mist text-sm max-w-md mx-auto">
                {need} · {stage} · {budget}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-volt hover:bg-voltsoft text-white font-medium px-8 py-4 rounded-full transition-all shadow-[0_10px_28px_-12px_rgba(30,58,255,0.65)]"
                >
                  Talk to Buildron <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-mist hover:text-paper text-sm border border-line hover:border-volt/50 rounded-full px-6 py-4 transition-all"
                >
                  <RotateCcw className="w-4 h-4" /> Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
