"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { track, EVENTS } from "@/lib/track";

/** Real routes, not hash anchors — hash links broke on every sub-page. */
const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-line py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group" aria-label="Buildron — home">
            <span className="font-display font-bold text-xl tracking-tightest">BUILDRON</span>
            <span className="text-[10px] tracking-[0.3em] text-mist uppercase mt-0.5 group-hover:text-voltsoft transition-colors">
              Digital Systems
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-sm transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-volt after:transition-all hover:after:w-full ${
                  isActive(l.href) ? "text-paper after:w-full" : "text-mist hover:text-paper after:w-0"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Hi Buildron, I want to start a project.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(EVENTS.whatsappClick, { location: "navbar" })}
              className="hidden sm:inline-flex items-center gap-2 bg-volt hover:bg-voltsoft text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-[0_6px_20px_-10px_rgba(30,58,255,0.6)]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 text-paper hover:text-voltsoft transition-colors"
            >
              {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="min-h-full flex flex-col justify-center px-8 py-28">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-3xl sm:text-4xl font-bold py-3 text-paper hover:text-volt transition-colors tracking-tightest"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-10">
                <a
                  href={waLink("Hi Buildron, I want to start a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(EVENTS.whatsappClick, { location: "mobile_menu" })}
                  className="inline-flex items-center gap-2 bg-volt text-white font-medium px-8 py-4 rounded-full"
                >
                  Start a Project <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
