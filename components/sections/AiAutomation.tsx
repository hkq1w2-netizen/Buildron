"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const FLOW = ["LEAD", "AI", "QUALIFICATION", "CRM", "WHATSAPP", "FOLLOW-UP", "APPOINTMENT", "ANALYTICS"];

export default function AiAutomation() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-28 md:py-40 bg-graphite/70 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-25">
        <Image
          src="/images/ai-automation.jpg"
          alt="AI automation workflow dashboard for business lead capture and customer follow-up"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="AI Automation"
              title={"LET THE SYSTEM\nDO THE WORK."}
              sub="Connect your leads, conversations, CRM, email, calendar and business processes into intelligent automated workflows."
            />
            <Reveal delay={0.2}>
              <div className="mt-8">
                <WhatsAppButton message="Hi Buildron, I want to discuss AI automation for my business.">
                  Automate My Business
                </WhatsAppButton>
              </div>
            </Reveal>
          </div>

          {/* Animated workflow */}
          <div ref={ref} className="relative">
            <div className="relative pl-10">
              {/* track */}
              <div className="absolute left-[13px] top-2 bottom-2 w-px bg-line/60" />
              <motion.div
                style={reduce ? {} : { height: lineH }}
                className="absolute left-[13px] top-2 w-px bg-gradient-to-b from-volt to-voltsoft "
              />
              <div className="space-y-5">
                {FLOW.map((step, i) => (
                  <Reveal key={step} delay={i * 0.06} y={16}>
                    <div className="relative flex items-center gap-4">
                      <div className="absolute -left-10 w-[27px] h-[27px] rounded-full bg-ink border border-line flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-volt " />
                      </div>
                      <div className="flex-1 flex items-center justify-between bg-charcoal/85 backdrop-blur border border-line/60 rounded-xl px-5 py-3.5">
                        <span className="font-display font-bold text-sm tracking-widest">
                          {step}
                        </span>
                        <span className="text-[10px] text-mist/50 font-mono">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="mt-6 pl-10 flex items-center gap-2 text-mist/50 text-xs">
              <ArrowDown className="w-3.5 h-3.5" /> The loop repeats — automatically
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
