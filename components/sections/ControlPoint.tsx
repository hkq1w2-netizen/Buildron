"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/data/site";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Beat 06 — RESOLVE. The end of the journey, and the only place on the page
 * where the visitor is asked to do something with real weight.
 *
 * It is written as a control panel rather than a footer CTA: the structure
 * behind the page has finished assembling by this scroll position, and this
 * is where the visitor gets to act on it. The commercial job still comes
 * first — the contact routes are plain, obvious and one tap away.
 */

const ROUTES: { label: string; detail: string; href: string; external?: boolean }[] = [
  { label: "WhatsApp", detail: SITE.phone, href: SITE.whatsapp, external: true },
  { label: "Email", detail: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Contact form", detail: "Send a brief", href: "/contact" },
];

export default function ControlPoint() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);

  // The panel "arms" itself when it comes into view. One state change, once —
  // the restraint is the point at the end of a long scroll.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setArmed(true),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="start"
      className="relative z-10 py-28 md:py-40"
      aria-labelledby="control-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="panel rounded-3xl overflow-hidden">
          {/* Status strip */}
          <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-4 border-b border-line">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors duration-700 ${
                  armed ? "bg-volt" : "bg-line"
                }`}
              />
              <span className="text-[10px] uppercase tracking-[0.28em] text-mist">
                {armed ? "System ready" : "System assembling"}
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-mist hidden sm:inline">
              Beat 06 — Resolve
            </span>
          </div>

          <div className="px-6 md:px-10 py-14 md:py-20">
            <motion.h2
              id="control-heading"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold tracking-tightest leading-[0.9] text-[13vw] sm:text-6xl lg:text-8xl max-w-4xl"
            >
              START THE
              <br />
              <span className="text-volt">BUILD.</span>
            </motion.h2>

            <p className="mt-8 max-w-xl text-lg text-mist leading-relaxed">
              Tell us what is not working — the site, the software, the process, the leads. We will
              tell you what we would build, what it would take, and whether we are the right people
              for it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                message="Hi Buildron, I want to start a project."
                location="control_point"
              >
                Start a project
              </WhatsAppButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 font-medium rounded-full border border-line hover:border-volt text-paper px-7 py-3.5 text-sm hover:bg-ink transition-all"
              >
                Send a brief instead
              </Link>
            </div>

            {/* Direct routes — never make someone hunt for a phone number. */}
            <dl className="mt-14 grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
              {ROUTES.map((r) => (
                <div key={r.label} className="bg-charcoal p-6">
                  <dt className="text-[10px] uppercase tracking-[0.24em] text-mist">{r.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="font-display font-bold tracking-tight text-paper hover:text-volt transition-colors"
                    >
                      {r.detail}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-mist">
              Based in {SITE.city}, {SITE.region}. Working with businesses across Pakistan and
              internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
