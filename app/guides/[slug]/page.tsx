import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES, getGuide, type Block } from "@/data/guides";
import { SITE } from "@/data/site";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import Prose from "@/components/page/Prose";
import FaqBlock from "@/components/page/FaqBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: g.metaTitle,
    description: g.metaDescription,
    path: `/guides/${g.slug}`,
    type: "article",
    publishedTime: g.published,
    modifiedTime: g.updated,
  });
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "p":
      return <p key={i}>{b.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      );
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const path = `/guides/${g.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: g.title, path },
  ];

  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path, name: g.metaTitle, description: g.metaDescription }),
          breadcrumbSchema(trail),
          articleSchema({
            headline: g.title,
            description: g.metaDescription,
            path,
            published: g.published,
            updated: g.updated,
          }),
          faqSchema(g.faqs),
        ])}
      />

      <PageHero label="Guide" h1={g.h1} sub={g.metaDescription}>
        <p className="mt-5 text-xs text-mist/60">
          Written by {SITE.name} ·{" "}
          <time dateTime={g.updated}>
            Updated{" "}
            {new Date(g.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </time>{" "}
          · {g.readMinutes} min read
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>{g.answer}</p>
        </AnswerBlock>

        <article className="py-14">
          <Prose>{g.body.map(renderBlock)}</Prose>
        </article>

        <FaqBlock faqs={g.faqs} heading="Questions" />

        <RelatedLinks
          services={g.relatedServices}
          solutions={g.relatedSolutions}
          caseStudies={g.relatedCaseStudies}
        />

        <Cta
          title="Want this applied to your business?"
          sub="Guides are general. Send us your specifics and we will tell you what actually applies to your situation."
          message={g.ctaMessage}
        />
      </div>
    </PageShell>
  );
}
