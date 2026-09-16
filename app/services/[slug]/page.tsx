import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { SERVICE_PAGES, getService } from "@/data/service-pages";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import FaqBlock from "@/components/page/FaqBlock";
import RelatedLinks from "@/components/page/RelatedLinks";
import Cta from "@/components/page/Cta";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { AUTOMATION_INDUSTRIES } from "@/data/automation-industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    image: s.image,
    keywords: s.keywords,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.label, path },
  ];

  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          webPageSchema({ path, name: s.metaTitle, description: s.metaDescription }),
          breadcrumbSchema(trail),
          serviceSchema({ name: s.label, description: s.answer, path, serviceType: s.serviceType }),
          faqSchema(s.faqs),
        ])}
      />

      <PageHero label={s.label} h1={s.h1} sub={s.metaDescription}>
        <div className="mt-8">
          <WhatsAppButton message={s.ctaMessage}>Discuss this on WhatsApp</WhatsAppButton>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>{s.answer}</p>
        </AnswerBlock>

        <div className="mt-14 relative aspect-[21/9] rounded-2xl overflow-hidden card-border">
          <Image
            src={s.image}
            alt={`${s.label} digital service work by Buildron`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>

        <section className="py-16 md:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tightest">Who this is for</h2>
            <ul className="mt-6 space-y-3">
              {s.whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-mist leading-relaxed">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-volt" aria-hidden="true" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tightest">Problems this solves</h2>
            <ul className="mt-6 space-y-3">
              {s.problems.map((p) => (
                <li key={p} className="flex gap-3 text-mist leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10" aria-labelledby="deliver-heading">
          <h2 id="deliver-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            What Buildron provides
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.deliver.map((d) => (
              <div key={d.title} className="rounded-xl card-border bg-charcoal/40 p-6">
                <h3 className="font-display font-bold text-lg tracking-tight">{d.title}</h3>
                <p className="mt-2.5 text-mist text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16" aria-labelledby="process-heading">
          <h2 id="process-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">
            How we work
          </h2>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.process.map((p, i) => (
              <li key={p.step} className="rounded-xl border border-line/60 bg-charcoal/30 p-6">
                <span className="font-display text-xs font-bold text-voltsoft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display font-bold text-lg tracking-tight">{p.step}</h3>
                <p className="mt-2 text-mist text-sm leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-10 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tightest">Typical use cases</h2>
            <ul className="mt-6 space-y-3">
              {s.useCases.map((u) => (
                <li key={u} className="flex gap-3 text-mist leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tightest">Technologies we use</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {s.tech.map((t) => (
                <li
                  key={t}
                  className="px-3.5 py-1.5 rounded-full bg-charcoal/80 border border-line/60 text-xs text-mist"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-mist text-sm leading-relaxed">
              We choose tools to fit the problem. Where an existing platform solves it better than custom work, we
              will say so — see{" "}
              <Link href="/about" className="text-voltsoft underline underline-offset-4 hover:text-paper">
                how Buildron works
              </Link>
              .
            </p>
          </div>
        </section>

        {s.slug === "ai-automation" && (
          <section className="py-14" aria-labelledby="industry-automation-heading">
            <h2 id="industry-automation-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">AI automation by industry</h2>
            <p className="mt-3 text-mist max-w-2xl">Choose the workflow closest to your business. These pages are written for specific operating models rather than generic keyword variations.</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AUTOMATION_INDUSTRIES.map((p) => (
                <Link key={p.slug} href={`/ai-automation/${p.slug}`} className="rounded-xl card-border bg-charcoal/40 p-5 hover:border-volt/50 transition-colors">
                  <h3 className="font-display font-bold text-lg">{p.industry}</h3>
                  <p className="mt-2 text-mist text-sm leading-relaxed">{p.metaDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <FaqBlock faqs={s.faqs} heading={`${s.label} questions`} />

        <RelatedLinks
          services={s.relatedServices}
          solutions={s.relatedSolutions}
          caseStudies={s.relatedCaseStudies}
          guides={s.relatedGuides}
        />

        <Cta title={s.ctaTitle} sub={s.ctaSub} message={s.ctaMessage} />
      </div>
    </PageShell>
  );
}
