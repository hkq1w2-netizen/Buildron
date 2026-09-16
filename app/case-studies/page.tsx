import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

const TITLE = "Case Studies — Systems Buildron Has Built | Buildron";
const DESC =
  "Real projects by Buildron: manufacturing ERP, AI lead automation, e-commerce storefronts, real estate platforms and corporate websites.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/case-studies" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Case studies", path: "/case-studies" },
];

export default function CaseStudiesHub() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([webPageSchema({ path: "/case-studies", name: TITLE, description: DESC }), breadcrumbSchema(trail)])}
      />

      <PageHero
        label="Case studies"
        h1="Systems Buildron has built"
        sub="Each case study describes the problem, what was built and what the system does — with no client names, revenue figures or percentages, because none of those are independently verifiable."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            These are real Buildron projects across ERP, automation, e-commerce, real estate and corporate web. Read
            them for the problem-and-approach detail rather than for headline numbers — we do not publish figures we
            cannot stand behind.
          </p>
        </AnswerBlock>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group rounded-2xl overflow-hidden card-border bg-charcoal/85 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={c.image}
                  alt={`${c.title} — ${c.category} case study by Buildron`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-ink/70 backdrop-blur border border-line/60 text-[11px] tracking-widest uppercase text-voltsoft">
                  {c.category}
                </span>
              </div>
              <div className="p-7">
                <h2 className="font-display text-xl font-bold tracking-tight group-hover:text-voltsoft transition-colors">
                  {c.title}
                </h2>
                <p className="mt-3 text-mist text-sm leading-relaxed">{c.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <RelatedLinks
          heading="Explore further"
          services={["erp-development", "lead-automation", "ecommerce"]}
          solutions={["manufacturing", "ecommerce"]}
        />

        <Cta
          title="Recognise your own problem here?"
          sub="Tell us which case study is closest to your situation and where yours differs."
          message="Hi Buildron, I read your case studies and want to discuss a similar project."
        />
      </div>
    </PageShell>
  );
}
