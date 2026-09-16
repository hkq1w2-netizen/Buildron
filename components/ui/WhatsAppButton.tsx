"use client";

import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { track, EVENTS } from "@/lib/track";

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  location = "page",
}: {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  location?: string;
}) {
  const base =
    "group inline-flex items-center gap-2.5 font-medium transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt";
  const styles =
    variant === "primary"
      ? "bg-volt hover:bg-voltsoft text-white px-7 py-3.5 text-sm shadow-[0_8px_24px_-10px_rgba(30,58,255,0.55)] hover:shadow-[0_12px_30px_-10px_rgba(30,58,255,0.7)]"
      : "border border-line hover:border-volt/60 text-paper px-7 py-3.5 text-sm hover:bg-charcoal/50";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(EVENTS.whatsappClick, { location })}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowUpRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
