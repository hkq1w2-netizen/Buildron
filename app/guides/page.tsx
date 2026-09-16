import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GUIDES } from "@/data/guides";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

const TITLE = "Guides — Practical Answers on ERP & AI Automation | Buildron";
const DESC =
  "Short, answer-first guides on AI automation, ERP, websites and lead systems for Pakistani businesses. No filler, no 3,000-word articles.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/guides" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

export default function GuidesHub() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([webPageSchema({ path: "/guides", name: TITLE, description: DESC }), breadcrumbSchema(trail)])}
      />

      <PageHero
        label="Guides"
        h1="Practical answers, not long articles"
        sub="Each guide answers one question directly in the first paragraph, then explains the reasoning. Most take four or five minutes to read."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            These guides cover the decisions Pakistani businesses actually face before buying software: what automation
            genuinely does, when spreadsheets stop working, what a business website needs, and how WhatsApp lead systems
            operate. We publish few guides deliberately, and keep them updated.
          </p>
        </AnswerBlock>

        <ul className="mt-16 space-y-4">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="group flex items-start justify-between gap-6 rounded-2xl card-border bg-charcoal/85 p-7 hover:border-volt/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
              >
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight group-hover:text-voltsoft transition-colors">
                    {g.title}
                  </h2>
                  <p className="mt-3 text-mist text-sm leading-relaxed max-w-2xl">{g.answer}</p>
                  <p className="mt-4 text-xs text-mist/50">
                    <time dateTime={g.updated}>
                      Updated{" "}
                      {new Date(g.updated).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </time>{" "}
                    · {g.readMinutes} min read
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 text-mist group-hover:text-voltsoft transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <RelatedLinks
          heading="Explore further"
          services={["ai-automation", "erp-development", "web-development"]}
          solutions={["textile", "ecommerce"]}
        />

        <Cta
          title="Question not answered here?"
          sub="Send it to us. If it is useful to other businesses, we will write it up."
          message="Hi Buildron, I have a question I couldn't find answered in your guides."
        />
      </div>
    </PageShell>
  );
}
