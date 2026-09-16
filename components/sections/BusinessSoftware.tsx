"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Beat 04 — DATA. The one dark scene on the entire site.
 *
 * It is dark because this is the only part of the story that happens inside
 * the business rather than in front of it: the ledger, the floor, the stock
 * position. Going dark exactly once makes it an event. The structure behind
 * the page crosses the boundary with the visitor rather than disappearing —
 * data-scene="dark" tells the renderer to invert its own palette here.
 */

const MODULES: [string, string][] = [
  ["Sales", "Quotes, orders, dispatch and invoicing against one customer record"],
  ["Inventory", "Multi-location stock with every movement traceable"],
  ["Production", "Job orders tracked stage by stage with material consumption"],
  ["Purchasing", "Purchase orders linked to requirements and pending receipts"],
  ["Accounts", "Receivables and payables that agree with the sales ledger"],
  ["Analytics", "Reporting views built on the records, not on re-entered numbers"],
];

export default function BusinessSoftware() {
  const reduce = useReducedMotion();

  return (
    <section
      data-scene="dark"
      className="scene-dark relative py-28 md:py-40 overflow-hidden"
      aria-labelledby="erp-heading"
    >
      {/* Faint machine grid, drawn light-on-dark so the section reads as the
          same world under different lighting rather than a different site. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.28) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.28) 1px,transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-14 lg:gap-20 items-start">
          <div>
            <p className="section-label mb-4">Beat 04 — Business Software</p>
            <h2
              id="erp-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.0]"
            >
              INSIDE THE
              <br />
              BUSINESS.
            </h2>
            <p className="mt-6 max-w-lg text-[#9aa0a8] text-base md:text-lg leading-relaxed">
              Most operations already have the data. It is just held in six places that disagree
              with each other. An ERP built around how the company actually works replaces the
              reconciliation with a single record.
            </p>

            <Reveal delay={0.15}>
              <div className="mt-10 border-t border-white/10">
                {MODULES.map(([name, detail], i) => (
                  <motion.div
                    key={name}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.06 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group grid grid-cols-[52px_minmax(0,1fr)] gap-4 py-4 border-b border-white/10"
                  >
                    <span className="font-display text-xs tabular-nums text-[#7e858e] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-[#f2f2f0] transition-colors group-hover:text-voltsoft">
                        {name}
                      </h3>
                      <p className="mt-1 text-sm text-[#9aa0a8] leading-relaxed">{detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <WhatsAppButton
                  message="Hi Buildron, I want to discuss a custom business software/ERP project."
                  location="erp"
                >
                  Scope my system
                </WhatsAppButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/erp-software.jpg"
                  alt="Business software dashboard with modules for sales, inventory, production and accounts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover opacity-90 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-carbon/35" />
              </div>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#7e858e]">
                ERP module map — sales, stock, production, accounts
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
