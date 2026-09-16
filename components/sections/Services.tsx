"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { waLink } from "@/lib/whatsapp";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Capabilities"
          title="WHAT WE BUILD"
          sub="From your first digital touchpoint to the systems running behind your business."
        />

        <div className="mt-16 space-y-0 border-t border-line/50">
          {SERVICES.map((s, i) => {
            const isActive = active === s.id;
            return (
              <Reveal key={s.id} delay={i * 0.04}>
                <div
                  className="group relative border-b border-line/50 cursor-pointer"
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : s.id)}
                >
                  <div className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-center transition-all duration-500">
                    <div className="md:col-span-1">
                      <span className="font-display text-sm text-mist/60 group-hover:text-voltsoft transition-colors">
                        {s.num}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-voltsoft transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt rounded"
                        >
                          {s.title}
                        </Link>
                      </h3>
                      <p className="text-voltsoft text-sm mt-1">{s.tag}</p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-mist text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="md:col-span-3 flex md:justify-end">
                      <a
                        href={waLink(s.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-paper border border-line group-hover:border-volt/70 group-hover:bg-volt/10 rounded-full px-5 py-2.5 transition-all"
                      >
                        {s.cta}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 grid md:grid-cols-12 gap-8 items-center">
                          <div className="md:col-span-5 md:col-start-2 relative aspect-[16/10] rounded-xl overflow-hidden card-border">
                            <Image
                              src={s.image}
                              alt={`${s.title} services by Buildron — digital systems and technology solution`}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="md:col-span-5 flex flex-wrap gap-2 content-center">
                            <Link
                              href={`/services/${s.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full mb-2 text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
                            >
                              Read more about {s.title.toLowerCase()} at Buildron
                            </Link>
                            {s.points.map((p) => (
                              <span
                                key={p}
                                className="px-3.5 py-1.5 rounded-full bg-charcoal/90 border border-line/60 text-xs text-mist"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* hover accent line */}
                  <div
                    className={`absolute left-0 bottom-0 h-px bg-gradient-to-r from-volt to-transparent transition-all duration-700 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-paper border border-line hover:border-volt/70 hover:bg-volt/10 rounded-full px-6 py-3 transition-all"
          >
            View all Buildron services
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
