import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import FaqBlock from "@/components/page/FaqBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

const TITLE = "About Buildron — Digital Systems Agency, Faisalabad";
const DESC =
  "Buildron is a digital systems agency based in Faisalabad, Pakistan, building websites, ERP software, AI automation and lead systems for growing businesses.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/about" });

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const FAQS = [
  {
    q: "Where is Buildron based?",
    a: `Buildron operates from ${SITE.city}, ${SITE.region}, Pakistan, and works with businesses across Pakistan as well as international clients remotely.`,
  },
  {
    q: "What kind of businesses does Buildron work with?",
    a: "Mostly textile and garment units, manufacturers, e-commerce brands, real estate businesses and professional services firms. We work with established businesses solving operational problems more often than with early-stage startups.",
  },
  {
    q: "Does Buildron work with clients outside Pakistan?",
    a: "Yes. Remote collaboration, written documentation and structured delivery are how we work by default, so international engagements do not require a different process.",
  },
  {
    q: "What does Buildron not do?",
    a: "We do not do paid media buying, print design, or hardware and networking. Where a project needs those, we will tell you rather than take the work and subcontract it quietly.",
  },
];

const PRINCIPLES = [
  {
    t: "We tell you when not to buy",
    d: "If a spreadsheet, an existing platform or a manual process is genuinely the better answer at your current scale, we will say so. Selling you a system you do not need costs us the next three projects.",
  },
  {
    t: "Business first, technology second",
    d: "We start by understanding how the operation actually runs — including the informal workarounds — before choosing any tool.",
  },
  {
    t: "Ship in phases, not big bangs",
    d: "One working module that people trust beats a complete system everyone works around. Every engagement is structured so the first phase is useful on its own.",
  },
  {
    t: "You own what we build",
    d: "Code, database and documentation are yours. We build on standard, widely used technology so another competent developer could take over without a rewrite.",
  },
  {
    t: "No invented proof",
    d: "We do not publish client names, revenue figures, percentages, awards or testimonials we cannot substantiate. Our case studies describe what was built and what it does.",
  },
  {
    t: "Plain answers",
    d: "Scope, timeline and cost stated directly. If something is uncertain, we say it is uncertain rather than padding the estimate quietly.",
  },
];

export default function AboutPage() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/about", name: TITLE, description: DESC }),
          breadcrumbSchema(trail),
          faqSchema(FAQS),
        ])}
      />

      <PageHero
        label="About"
        h1="Buildron is a digital systems agency in Faisalabad"
        sub="We build the websites, business software, automation and lead systems that growing Pakistani companies run on — and we are direct about what each one will and will not fix."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            Buildron is a technology agency based in {SITE.city}, {SITE.region}, Pakistan. We design and engineer
            websites, e-commerce stores, custom ERP and business software, AI automation, AI chatbots and lead systems.
            We serve businesses across Pakistan and work with international clients remotely.
          </p>
        </AnswerBlock>

        <section className="py-16 md:py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">Why Buildron exists</h2>
            <div className="mt-6 space-y-5 text-mist leading-relaxed">
              <p>
                Most businesses in Faisalabad and across Pakistan already have the pieces: a website somewhere, a
                spreadsheet running operations, WhatsApp handling enquiries, an accountant maintaining a separate set
                of numbers. None of it is connected, so effort leaks at every join.
              </p>
              <p>
                Buildron exists to close those joins. That usually means building one system properly rather than
                buying four tools that each solve a fragment. Sometimes it means telling a business that the fix is a
                process change, not software.
              </p>
              <p>
                We work with established operations more often than with startups, because the problems we are best at
                — production visibility, stock accuracy, enquiry handling, costing — only appear once a business has
                real volume.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">How we work</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((p) => (
                <div key={p.t} className="rounded-xl border border-line/60 bg-charcoal/80 p-5">
                  <h3 className="font-display font-bold text-base tracking-tight">{p.t}</h3>
                  <p className="mt-2 text-mist text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            Business details
          </h2>
          <dl className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
            {[
              { t: "Business name", d: SITE.name },
              { t: "Location", d: `${SITE.city}, ${SITE.region}, ${SITE.country}` },
              { t: "Email", d: SITE.email },
              { t: "Phone / WhatsApp", d: SITE.phone },
            ].map((x) => (
              <div key={x.t} className="rounded-xl card-border bg-charcoal/85 p-5">
                <dt className="text-[11px] tracking-widest uppercase text-voltsoft">{x.t}</dt>
                <dd className="mt-2 text-paper/90 text-sm break-words">{x.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-mist text-sm max-w-2xl leading-relaxed">
            These are the only contact details Buildron uses. If you are contacted by someone claiming to represent
            Buildron from a different number or address, please{" "}
            <Link href="/contact" className="text-voltsoft underline underline-offset-4 hover:text-paper">
              verify with us directly
            </Link>
            .
          </p>
        </section>

        <FaqBlock faqs={FAQS} heading="About Buildron" />

        <RelatedLinks
          services={["web-development", "erp-development", "ai-automation"]}
          solutions={["textile", "manufacturing"]}
          caseStudies={["manufacturing-erp-system"]}
        />

        <Cta
          title="Want to know if we are the right fit?"
          sub="Tell us the problem. If we are not the right people for it, we will say so and point you somewhere better."
          message="Hi Buildron, I'd like to know whether you're the right fit for my project."
        />
      </div>
    </PageShell>
  );
}
