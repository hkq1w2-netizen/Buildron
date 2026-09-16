import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SOLUTION_PAGES } from "@/data/solution-pages";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

const TITLE = "Industry Solutions — Textile, Manufacturing & More | Buildron";
const DESC =
  "Digital systems built for the industries Buildron actually works in: textile, manufacturing, e-commerce, real estate and professional services.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/solutions" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
];

export default function SolutionsHub() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([webPageSchema({ path: "/solutions", name: TITLE, description: DESC }), breadcrumbSchema(trail)])}
      />

      <PageHero
        label="Solutions"
        h1="Systems built around how your industry actually works"
        sub="We publish solution pages only for industries we have genuinely built systems for. Each one describes the specific operational problems that industry has, not a generic template with the name changed."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            Buildron works primarily with textile and garment units, manufacturers, e-commerce brands, real estate
            businesses and professional services firms — concentrated in Faisalabad and across Pakistan. The systems
            differ by industry because the operational constraints do.
          </p>
        </AnswerBlock>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {SOLUTION_PAGES.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group rounded-2xl overflow-hidden card-border bg-charcoal/85 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
            >
              <div className="relative aspect-[16/8]">
                <Image
                  src={s.image}
                  alt={`${s.label} — real industry photography for Buildron solution page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="p-7">
                <h2 className="font-display text-xl font-bold tracking-tight group-hover:text-voltsoft transition-colors">
                  {s.label}
                </h2>
                <p className="mt-3 text-mist text-sm leading-relaxed">{s.metaDescription}</p>
              </div>
            </Link>
          ))}
        </div>

        <RelatedLinks
          heading="Explore further"
          services={["erp-development", "web-development", "ai-automation"]}
          caseStudies={["manufacturing-erp-system", "fashion-ecommerce-experience"]}
        />

        <Cta
          title="Your industry not listed?"
          sub="We do not publish pages for industries we have not worked in. If yours is missing, tell us about the operation and we will say honestly whether we are the right fit."
          message="Hi Buildron, I want to discuss a system for my industry."
        />
      </div>
    </PageShell>
  );
}
