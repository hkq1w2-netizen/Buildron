"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { SITE } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { track, EVENTS } from "@/lib/track";
import Reveal from "@/components/ui/Reveal";

const SERVICES = ["Website", "E-commerce", "Web Application", "ERP / Business Software", "AI Automation", "AI Agent", "SEO", "Social Media", "Other"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", business: "", email: "", whatsapp: "",
    service: "", budget: "", details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi Buildron, I have a project inquiry.",
      "",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      "",
      `Details: ${form.details}`,
    ].join("\n");
    track(EVENTS.formSubmit, { service: form.service || "unspecified" });
    window.open(waLink(msg), "_blank");
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-bg.jpg"
          alt="Buildron digital systems and automation workspace"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <p className="section-label mb-5">Contact</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tightest leading-[0.98]">
                HAVE A SYSTEM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-voltsoft to-volt">
                  WORTH BUILDING?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-mist text-lg leading-relaxed max-w-md">
                Tell us what you're building, what you're trying to improve, or
                where your business is getting stuck. We'll help define the
                digital system that makes sense.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => track(EVENTS.emailClick, { location: "contact_section" })}
                  className="flex items-center gap-4 text-mist hover:text-paper transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full border border-line flex items-center justify-center group-hover:border-volt/60 transition-colors">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  {SITE.email}
                </a>
                <a
                  href={waLink("Hi Buildron, I want to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(EVENTS.whatsappClick, { location: "contact_section" })}
                  className="flex items-center gap-4 text-mist hover:text-paper transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full border border-line flex items-center justify-center group-hover:border-volt/60 transition-colors">
                    <Phone className="w-4.5 h-4.5" />
                  </span>
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl card-border bg-ink/70 backdrop-blur-xl p-8 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-mist mb-2">Name <span aria-hidden="true" className="text-volt">*</span></label>
                  <input id="name" name="name" required aria-required="true" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="business" className="block text-xs tracking-widest uppercase text-mist mb-2">Business</label>
                  <input id="business" name="organization" autoComplete="organization" value={form.business} onChange={set("business")} placeholder="Company / brand" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-mist mb-2">Email <span aria-hidden="true" className="text-volt">*</span></label>
                  <input id="email" name="email" type="email" required aria-required="true" autoComplete="email" inputMode="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs tracking-widest uppercase text-mist mb-2">WhatsApp</label>
                  <input id="whatsapp" name="tel" type="tel" autoComplete="tel" inputMode="tel" value={form.whatsapp} onChange={set("whatsapp")} placeholder="+92 ..." />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-xs tracking-widest uppercase text-mist mb-2">Service <span aria-hidden="true" className="text-volt">*</span></label>
                  <select id="service" name="service" required aria-required="true" value={form.service} onChange={set("service")}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs tracking-widest uppercase text-mist mb-2">Budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={set("budget")}>
                    <option value="" disabled>Select a range</option>
                    <option>Under Rs. 50k</option>
                    <option>Rs. 50k–100k</option>
                    <option>Rs. 100k–250k</option>
                    <option>Rs. 250k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="details" className="block text-xs tracking-widest uppercase text-mist mb-2">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={form.details}
                  onChange={set("details")}
                  placeholder="What are you building or trying to solve?"
                  className="resize-none"
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-volt hover:bg-voltsoft text-white font-medium px-8 py-4 rounded-full transition-all shadow-[0_10px_28px_-12px_rgba(30,58,255,0.65)]"
                >
                  Start a Conversation <Send className="w-4 h-4" />
                </button>
                <a
                  href={waLink("Hi Buildron, I want to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(EVENTS.whatsappClick, { location: "contact_form" })}
                  className="inline-flex items-center gap-2 border border-line hover:border-volt/60 hover:bg-volt/10 font-medium px-8 py-4 rounded-full transition-all text-sm"
                >
                  WhatsApp Buildron
                </a>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
