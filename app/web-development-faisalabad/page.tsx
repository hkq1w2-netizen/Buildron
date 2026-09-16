import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICE_PAGES } from "@/data/service-pages";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import FaqBlock from "@/components/page/FaqBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const PATH = "/web-development-faisalabad";
const TITLE = "Web Development & Digital Systems in Faisalabad | Buildron";
const DESC =
  "Buildron is a web development and digital systems agency based in Faisalabad. Websites, ERP software, AI automation and SEO for local businesses and exporters.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: PATH });

const trail = [
  { name: "Home", path: "/" },
  { name: "Faisalabad", path: PATH },
];

const FAQS = [
  {
    q: "Is Buildron actually based in Faisalabad?",
    a: `Yes. Buildron operates from ${SITE.city}, ${SITE.region}, Pakistan. We meet local clients in person where it helps and work remotely with businesses elsewhere in Pakistan and internationally.`,
  },
  {
    q: "Do you work with textile businesses in Faisalabad?",
    a: "Yes, and it is a significant part of our work. Faisalabad's textile and garment units have specific needs around production tracking, job work reconciliation and costing that generic software handles poorly.",
  },
  {
    q: "What does a website cost for a Faisalabad business?",
    a: "Buildron's website projects start around Rs. 40,000 for a focused business site and rise with scope. We quote against defined requirements rather than a page count, and we will tell you if a smaller build would serve you better.",
  },
  {
    q: "Can we meet in person before starting?",
    a: "Yes, for local projects that is often the fastest way to understand an operation — particularly for ERP work, where seeing the floor matters more than any specification document.",
  },
];

export default function FaisalabadPage() {
  const local = SERVICE_PAGES.filter((s) =>
    ["web-development", "erp-development", "ai-automation", "seo", "ecommerce", "lead-automation"].includes(s.slug)
  );

  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path: PATH, name: TITLE, description: DESC }),
          breadcrumbSchema(trail),
          serviceSchema({
            name: "Web development and digital systems in Faisalabad",
            description: DESC,
            path: PATH,
            serviceType: "Web development",
          }),
          faqSchema(FAQS),
        ])}
      />

      <PageHero
        label={`${SITE.city}, ${SITE.region}`}
        h1="Web development and digital systems in Faisalabad"
        sub="Buildron works from Faisalabad with the businesses that drive it — textile units, manufacturers, exporters, retailers and professional firms."
      >
        <div className="mt-8">
          <WhatsAppButton message="Hi Buildron, I'm a business in Faisalabad and want to discuss a project.">
            Message us on WhatsApp
          </WhatsAppButton>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            Buildron is a digital systems agency operating from {SITE.city}, {SITE.region}. We build websites,
            e-commerce stores, custom ERP software, AI automation and lead systems for local businesses, and we
            regularly work with the textile and manufacturing operations the city is built on.
          </p>
        </AnswerBlock>

        <section className="py-16 md:py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
              Why local context matters here
            </h2>
            <div className="mt-6 space-y-5 text-mist leading-relaxed">
              <p>
                Faisalabad&apos;s economy runs on textile, garments and the trading and manufacturing businesses around
                them. Those operations have constraints that generic software vendors do not plan for: material that
                changes form at every stage, job work sent to outside processors, costing that has to account for
                wastage, and industrial locations where reliable internet cannot be assumed.
              </p>
              <p>
                On the customer-facing side, buyers here message on WhatsApp rather than filling in forms, and browse
                on mobile data rather than office broadband. A website built on the assumptions of a different market
                will underperform regardless of how well it is designed.
              </p>
              <p>
                We build with those constraints as the starting point, not as exceptions discovered halfway through a
                project.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">Who we work with locally</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Textile and garment units needing production and inventory visibility",
                "Exporters who need a credible web presence for overseas buyers",
                "Manufacturers and distributors managing multi-location stock",
                "Retailers and brands moving from WhatsApp selling to a real storefront",
                "Professional firms competing for local search visibility",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-mist leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-mist text-sm leading-relaxed">
              For industry-specific detail, see our{" "}
              <Link href="/solutions/textile" className="text-voltsoft underline underline-offset-4 hover:text-paper">
                textile and garments solutions
              </Link>{" "}
              and{" "}
              <Link href="/solutions/manufacturing" className="text-voltsoft underline underline-offset-4 hover:text-paper">
                manufacturing solutions
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-10" aria-labelledby="local-services">
          <h2 id="local-services" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            Services for Faisalabad businesses
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {local.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-line/60 bg-charcoal/80 p-6 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
              >
                <h3 className="font-display font-bold text-lg tracking-tight group-hover:text-voltsoft transition-colors">
                  {s.label}
                </h3>
                <p className="mt-2.5 text-mist text-sm leading-relaxed">{s.answer.split(". ")[0]}.</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-14" aria-labelledby="reach-us">
          <h2 id="reach-us" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            How to reach us
          </h2>
          <dl className="mt-8 grid sm:grid-cols-3 gap-5 max-w-3xl">
            <div className="rounded-xl card-border bg-charcoal/85 p-5">
              <dt className="text-[11px] tracking-widest uppercase text-voltsoft">Location</dt>
              <dd className="mt-2 text-paper/90 text-sm">
                {SITE.city}, {SITE.region}, {SITE.country}
              </dd>
            </div>
            <div className="rounded-xl card-border bg-charcoal/85 p-5">
              <dt className="text-[11px] tracking-widest uppercase text-voltsoft">WhatsApp</dt>
              <dd className="mt-2 text-sm">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-paper/90 hover:text-voltsoft">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-xl card-border bg-charcoal/85 p-5">
              <dt className="text-[11px] tracking-widest uppercase text-voltsoft">Email</dt>
              <dd className="mt-2 text-sm break-words">
                <a href={`mailto:${SITE.email}`} className="text-paper/90 hover:text-voltsoft">
                  {SITE.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <FaqBlock faqs={FAQS} heading="Working with Buildron in Faisalabad" />

        <RelatedLinks
          services={["web-development", "erp-development", "seo"]}
          solutions={["textile", "manufacturing"]}
          caseStudies={["manufacturing-erp-system"]}
        />

        <Cta
          title="Based in Faisalabad and need a system built?"
          sub="Message us on WhatsApp. For local ERP projects we will usually come and see the operation before quoting anything."
          message="Hi Buildron, I'm a business in Faisalabad and want to discuss a project."
        />
      </div>
    </PageShell>
  );
}
