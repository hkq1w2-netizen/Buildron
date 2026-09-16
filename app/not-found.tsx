import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Buildron page does not exist. Browse services, case studies and guides instead.",
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  { href: "/services", label: "All services", desc: "Web development, ERP, AI automation, SEO and more." },
  { href: "/case-studies", label: "Case studies", desc: "Systems Buildron has actually built." },
  { href: "/guides", label: "Guides", desc: "Short answers to common business technology questions." },
  { href: "/contact", label: "Contact", desc: "Message us on WhatsApp or send a project brief." },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative min-h-[70vh] flex items-center pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <p className="section-label mb-5">404</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.03] max-w-3xl">
            That page does not exist
          </h1>
          <p className="mt-6 text-mist text-lg leading-relaxed max-w-xl">
            The link may be out of date, or the address may have a typo. Here is where most people are heading.
          </p>
          <ul className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl">
            {SUGGESTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block rounded-xl border border-line/60 bg-charcoal/30 p-6 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
                >
                  <span className="font-display font-bold text-lg tracking-tight">{s.label}</span>
                  <span className="mt-2 block text-mist text-sm leading-relaxed">{s.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/" className="text-voltsoft underline underline-offset-4 hover:text-paper">
              Back to the Buildron homepage
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
