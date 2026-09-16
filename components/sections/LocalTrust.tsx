import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Homepage trust + local relevance block. Answers "who is this, where are they,
 * why trust them, how do I contact them" in one screen, and carries the
 * contextual internal links into the deeper page architecture.
 */
export default function LocalTrust() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Who we are"
          title={"BUILT IN FAISALABAD.\nWORKING ACROSS PAKISTAN."}
          sub="Buildron is a digital systems agency based in Faisalabad, Punjab. We work with textile units, manufacturers, exporters, retailers and professional firms — locally in person, and remotely across Pakistan and abroad."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="h-full rounded-2xl card-border bg-charcoal/85 p-7">
              <MapPin className="w-6 h-6 text-voltsoft mb-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display font-bold text-lg tracking-tight">Where we operate</h3>
              <p className="mt-3 text-mist text-sm leading-relaxed">
                {SITE.city}, {SITE.region}, {SITE.country}. For local ERP projects we visit the operation before
                quoting.
              </p>
              <Link
                href="/web-development-faisalabad"
                className="mt-4 inline-block text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
              >
                Buildron in Faisalabad
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl card-border bg-charcoal/85 p-7">
              <MessageCircle className="w-6 h-6 text-voltsoft mb-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display font-bold text-lg tracking-tight">Why businesses trust us</h3>
              <p className="mt-3 text-mist text-sm leading-relaxed">
                We publish what we built and how — with no invented client names, revenue figures or testimonials. If a
                cheaper fix will solve your problem, we say so.
              </p>
              <Link
                href="/case-studies"
                className="mt-4 inline-block text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
              >
                Read the case studies
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl card-border bg-charcoal/85 p-7">
              <Mail className="w-6 h-6 text-voltsoft mb-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display font-bold text-lg tracking-tight">How to reach us</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={waLink("Hi Buildron, I want to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mist hover:text-paper transition-colors"
                  >
                    WhatsApp {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="text-mist hover:text-paper transition-colors break-words">
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
              >
                Send a project brief
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <span className="text-mist/60">Popular:</span>
          <Link href="/services/web-development" className="text-voltsoft hover:text-paper underline underline-offset-4">
            web development company Pakistan
          </Link>
          <Link href="/services/ai-automation" className="text-voltsoft hover:text-paper underline underline-offset-4">
            AI automation agency Pakistan
          </Link>
          <Link href="/services/social-media-marketing" className="text-voltsoft hover:text-paper underline underline-offset-4">
            social media marketing agency Pakistan
          </Link>
          <Link href="/services/seo" className="text-voltsoft hover:text-paper underline underline-offset-4">
            SEO services Pakistan
          </Link>
          <Link href="/services/erp-development" className="text-voltsoft hover:text-paper underline underline-offset-4">
            ERP software in Pakistan
          </Link>
          <Link href="/services/ai-automation" className="text-voltsoft hover:text-paper underline underline-offset-4">
            AI automation for business
          </Link>
          <Link href="/solutions/textile" className="text-voltsoft hover:text-paper underline underline-offset-4">
            textile systems
          </Link>
          <Link href="/guides" className="text-voltsoft hover:text-paper underline underline-offset-4">
            practical guides
          </Link>
        </div>
      </div>
    </section>
  );
}
