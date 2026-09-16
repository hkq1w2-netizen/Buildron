import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_PAGES } from "@/data/service-pages";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import Cta from "@/components/page/Cta";
import RelatedLinks from "@/components/page/RelatedLinks";

const TITLE = "Services — Web Development, AI Automation & ERP | Buildron";
const DESC =
  "Buildron's services: web development, AI automation, ERP software, SEO, e-commerce, lead automation, AI chatbots and custom business systems.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/services" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesHub() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/services", name: TITLE, description: DESC }),
          breadcrumbSchema(trail),
          {
            "@type": "ItemList",
            itemListElement: SERVICE_PAGES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.label,
              url: `https://www.buildron.online/services/${s.slug}`,
            })),
          },
        ])}
      />

      <PageHero
        label="Services"
        h1="What Buildron builds"
        sub="Nine services, one idea: your website, software, automation and customer experience should work as a single system rather than as separate purchases."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            Buildron builds websites, e-commerce stores, custom ERP and business software, AI automation, AI chatbots,
            lead systems, SEO and social media programmes for businesses in Faisalabad and across Pakistan. Most
            engagements start with one service and expand once the first system is working.
          </p>
        </AnswerBlock>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_PAGES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl card-border bg-charcoal/85 p-7 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-xs text-mist/60">{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-mist group-hover:text-voltsoft transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold tracking-tight group-hover:text-voltsoft transition-colors">
                {s.label}
              </h2>
              <p className="mt-3 text-mist text-sm leading-relaxed">{s.metaDescription}</p>
            </Link>
          ))}
        </div>

        <section className="py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest">Where to start</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 max-w-5xl">
            {[
              {
                t: "You need to be found",
                d: "Start with a website that is structured for search, then build visibility on top of it.",
                href: "/services/web-development",
                a: "web development",
              },
              {
                t: "You are losing enquiries",
                d: "Start with lead capture and follow-up before adding anything more sophisticated.",
                href: "/services/lead-automation",
                a: "lead automation",
              },
              {
                t: "Your operations are manual",
                d: "Start with the one process that is hardest to keep accurate, usually inventory or production.",
                href: "/services/erp-development",
                a: "ERP development",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-line/60 bg-charcoal/80 p-6">
                <h3 className="font-display font-bold text-lg tracking-tight">{c.t}</h3>
                <p className="mt-2.5 text-mist text-sm leading-relaxed">{c.d}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-block text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
                >
                  Explore {c.a}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          heading="Explore further"
          solutions={["textile", "manufacturing", "ecommerce"]}
          caseStudies={["manufacturing-erp-system", "ai-lead-automation-pipeline"]}
          guides={["ai-automation-small-business"]}
        />

        <Cta
          title="Not sure which service you actually need?"
          sub="Describe the problem rather than the solution. We will tell you which of these applies, or tell you that none of them do."
          message="Hi Buildron, I'm not sure which service I need. Can you help me figure it out?"
        />
      </div>
    </PageShell>
  );
}
