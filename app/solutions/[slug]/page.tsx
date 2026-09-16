import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SOLUTION_PAGES, getSolution } from "@/data/solution-pages";
import { getService } from "@/data/service-pages";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import FaqBlock from "@/components/page/FaqBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_PAGES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/solutions/${s.slug}`, image: s.image });
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();

  const path = `/solutions/${s.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: s.label, path },
  ];

  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path, name: s.metaTitle, description: s.metaDescription }),
          breadcrumbSchema(trail),
          faqSchema(s.faqs),
        ])}
      />

      <PageHero label={`Solutions — ${s.label}`} h1={s.h1} sub={s.metaDescription} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>{s.answer}</p>
        </AnswerBlock>

        <div className="mt-14 relative aspect-[21/9] rounded-2xl overflow-hidden card-border">
          <Image
            src={s.image}
            alt={`${s.label} business operations and technology — Buildron`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>

        <section className="py-16 md:py-20" aria-labelledby="realities-heading">
          <h2 id="realities-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            What makes this industry different
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-5xl">
            {s.realities.map((r) => (
              <div key={r.title} className="rounded-xl card-border bg-charcoal/40 p-6">
                <h3 className="font-display font-bold text-lg tracking-tight">{r.title}</h3>
                <p className="mt-2.5 text-mist text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10" aria-labelledby="build-heading">
          <h2 id="build-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            What Buildron builds for {s.label.toLowerCase()} businesses
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.whatWeBuild.map((w) => {
              const svc = getService(w.service);
              return (
                <div key={w.title} className="rounded-xl border border-line/60 bg-charcoal/30 p-6 flex flex-col">
                  <h3 className="font-display font-bold text-lg tracking-tight">{w.title}</h3>
                  <p className="mt-2.5 text-mist text-sm leading-relaxed flex-1">{w.desc}</p>
                  {svc && (
                    <Link
                      href={`/services/${svc.slug}`}
                      className="mt-4 text-sm text-voltsoft underline underline-offset-4 hover:text-paper"
                    >
                      {svc.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16" aria-labelledby="signals-heading">
          <h2 id="signals-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            Signs this applies to you
          </h2>
          <ul className="mt-6 space-y-3 max-w-3xl">
            {s.signals.map((sig) => (
              <li key={sig} className="flex gap-3 text-mist leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
                <span>{sig}</span>
              </li>
            ))}
          </ul>
        </section>

        <FaqBlock faqs={s.faqs} heading={`${s.label} questions`} />

        <RelatedLinks
          services={s.relatedServices}
          caseStudies={s.relatedCaseStudies}
          guides={s.relatedGuides}
        />

        <Cta
          title={`Building systems for ${s.label.toLowerCase()}?`}
          sub="Tell us which part of the operation is hardest to keep accurate. That is usually where we start."
          message={s.ctaMessage}
        />
      </div>
    </PageShell>
  );
}
