import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, caseStudySchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/case-studies/${c.slug}`, image: c.image });
}

function List({ heading, items, id }: { heading: string; items: string[]; id: string }) {
  return (
    <section className="py-10" aria-labelledby={id}>
      <h2 id={id} className="font-display text-2xl md:text-3xl font-bold tracking-tightest">
        {heading}
      </h2>
      <ul className="mt-5 space-y-3 max-w-3xl">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-mist leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  const path = `/case-studies/${c.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Case studies", path: "/case-studies" },
    { name: c.title, path },
  ];

  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path, name: c.metaTitle, description: c.metaDescription }),
          breadcrumbSchema(trail),
          caseStudySchema({ name: c.title, description: c.metaDescription, path }),
        ])}
      />

      <PageHero label={c.category} h1={c.title} sub={c.metaDescription} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>{c.summary}</p>
        </AnswerBlock>

        <div className="mt-14 relative aspect-[21/9] rounded-2xl overflow-hidden card-border">
          <Image
            src={c.image}
            alt={`${c.title} — ${c.category} case study by Buildron`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>

        {c.liveUrl && (
          <p className="mt-6">
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-volt border-b border-volt/40 hover:border-volt pb-0.5 transition-colors"
            >
              Visit the live project
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}

        <List id="problem-heading" heading="The problem" items={c.problem} />
        <List id="approach-heading" heading="Buildron's approach" items={c.approach} />

        <section className="py-10" aria-labelledby="features-heading">
          <h2 id="features-heading" className="font-display text-2xl md:text-3xl font-bold tracking-tightest">
            What was built
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.features.map((f) => (
              <div key={f} className="rounded-xl border border-line/60 bg-charcoal/30 px-5 py-4 text-sm text-mist">
                {f}
              </div>
            ))}
          </div>
          <h3 className="mt-10 font-display text-lg font-bold tracking-tight">Technologies</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {c.stack.map((t) => (
              <li key={t} className="px-3.5 py-1.5 rounded-full bg-charcoal/80 border border-line/60 text-xs text-mist">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <List id="outcome-heading" heading="What the system does now" items={c.outcome} />

        <p className="max-w-3xl text-mist/60 text-sm leading-relaxed border-l-2 border-line pl-5">
          Buildron does not publish client names, revenue figures or performance percentages for this project, because
          those figures are not independently verifiable. What is described above is what was built and what the system
          does.
        </p>

        <RelatedLinks services={c.relatedServices} solutions={c.relatedSolutions} />

        <Cta
          title="Have a similar problem?"
          sub="Describe your situation and we will tell you how close it is to this project, and where it differs."
          message={c.ctaMessage}
        />
      </div>
    </PageShell>
  );
}
