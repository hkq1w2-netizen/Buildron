"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export type Faq = { q: string; a: string };

/**
 * Accessible FAQ accordion. Answers stay in the DOM (hidden attribute) so the
 * text is crawlable and matches the FAQPage schema on the page.
 */
export default function FaqBlock({ faqs, heading = "Questions" }: { faqs: Faq[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
        {heading}
      </h2>
      <div className="mt-8 space-y-3 max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`rounded-xl border transition-colors ${isOpen ? "border-volt/40 bg-charcoal/60" : "border-line/60 bg-charcoal/30"}`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt rounded-xl"
                >
                  <span className="font-medium text-paper/90">{f.q}</span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-voltsoft transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen}>
                <p className="px-6 pb-6 text-mist text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
