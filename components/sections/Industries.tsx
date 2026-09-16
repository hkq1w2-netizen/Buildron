"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/data/industries";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Industries"
          title="SYSTEMS FOR AMBITIOUS BUSINESSES."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* List */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-1">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-5 rounded-xl transition-all duration-300 border ${
                    active === i
                      ? "border-volt/50 bg-volt/5"
                      : "border-transparent hover:border-line/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-display text-lg md:text-xl font-bold tracking-tight transition-colors ${
                        active === i ? "text-paper" : "text-mist"
                      }`}
                    >
                      {ind.title}
                    </span>
                    <span
                      className={`text-xs font-mono transition-colors ${
                        active === i ? "text-voltsoft" : "text-mist/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden text-sm text-mist mt-2"
                      >
                        {ind.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {INDUSTRIES[active]?.slug && (
              <Link
                href={`/solutions/${INDUSTRIES[active].slug}`}
                className="mt-6 ml-5 inline-block text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
              >
                Explore {INDUSTRIES[active].title.toLowerCase()} solutions
              </Link>
            )}
          </div>

          {/* Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <div className="relative aspect-[16/11] lg:aspect-[16/12] rounded-2xl overflow-hidden card-border">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={INDUSTRIES[active].image}
                      alt={`${INDUSTRIES[active].title} digital solutions by Buildron`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-xl font-bold">
                        {INDUSTRIES[active].title}
                      </p>
                      <p className="text-mist text-sm mt-1">
                        {INDUSTRIES[active].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
