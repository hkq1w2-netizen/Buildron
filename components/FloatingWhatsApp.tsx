"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { track, EVENTS } from "@/lib/track";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          href={waLink("Hi Buildron, I want to discuss a project.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Talk to Buildron on WhatsApp"
          onClick={() => track(EVENTS.whatsappClick, { location: "floating_button" })}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-volt hover:bg-voltsoft text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(30,58,255,0.28)] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">
            Talk to Buildron
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
