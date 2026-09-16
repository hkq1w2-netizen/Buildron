"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/lib/whatsapp";

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-graphite/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Selected Work"
          title="BUILT FOR THE REAL WORLD."
          sub="A selection of systems and experiences across commerce, software and automation."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.12}>
              <motion.article
                whileHover="hover"
                className="group relative rounded-2xl overflow-hidden card-border bg-charcoal/85"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <motion.div
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.category} digital project by Buildron`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-ink/70 backdrop-blur border border-line/60 text-[11px] tracking-widest uppercase text-voltsoft">
                    {p.category}
                  </span>
                </div>

                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                      {p.slug ? (
                        <Link
                          href={`/case-studies/${p.slug}`}
                          className="hover:text-voltsoft transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt rounded"
                        >
                          {p.title}
                        </Link>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <a
                      href={waLink(`Hi Buildron, I saw your work on "${p.title}" and want to discuss a similar project.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Discuss a project like ${p.title}`}
                      className="shrink-0 w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-volt group-hover:border-volt transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-mist text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.capabilities.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full bg-ink/60 border border-line/50 text-[11px] text-mist"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-paper border border-line hover:border-volt/70 hover:bg-volt/10 rounded-full px-6 py-3 transition-all"
          >
            Read the full case studies
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
