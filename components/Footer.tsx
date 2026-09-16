import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICE_PAGES } from "@/data/service-pages";
import { waLink } from "@/lib/whatsapp";

const COMPANY = [
  { label: "About Buildron", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Guides", href: "/guides" },
  { label: "Industry solutions", href: "/solutions" },
  { label: "Buildron in Faisalabad", href: "/web-development-faisalabad" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line/50 bg-graphite/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex flex-col leading-none mb-5 w-fit">
              <span className="font-display font-bold text-3xl tracking-tightest">BUILDRON</span>
              <span className="text-[11px] tracking-[0.35em] text-mist uppercase mt-1">Digital Systems</span>
            </Link>
            <p className="text-mist max-w-sm leading-relaxed text-sm">
              Websites, business software, AI automation and digital systems for growing businesses — built in{" "}
              {SITE.city}, {SITE.region}, Pakistan.
            </p>

            {/* NAP block — must match the Google Business Profile exactly. */}
            <address className="mt-7 not-italic text-sm space-y-2">
              <p className="text-paper/90 font-medium">{SITE.name}</p>
              <p className="text-mist">
                {SITE.city}, {SITE.region}, {SITE.country}
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="text-mist hover:text-paper transition-colors break-words">
                  {SITE.email}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE.phoneE164}`} className="text-mist hover:text-paper transition-colors">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={waLink("Hi Buildron, I want to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-voltsoft hover:text-paper transition-colors"
                >
                  Message on WhatsApp →
                </a>
              </p>
            </address>
          </div>

          <nav className="md:col-span-4" aria-labelledby="footer-services">
            <p id="footer-services" className="section-label mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-mist hover:text-paper transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-4" aria-labelledby="footer-company">
            <p id="footer-company" className="section-label mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist hover:text-paper transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="section-label mt-8 mb-5">Legal</p>
            <ul className="space-y-3">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist hover:text-paper transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-line/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mist/60 text-xs tracking-wide">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-mist/40 text-xs">Engineered, not assembled.</p>
        </div>
      </div>
    </footer>
  );
}
