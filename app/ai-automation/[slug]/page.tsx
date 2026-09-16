import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTOMATION_INDUSTRIES, getAutomationIndustry } from "@/data/automation-industries";
import { pageMeta, graph, webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import FaqBlock from "@/components/page/FaqBlock";
import Cta from "@/components/page/Cta";

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTOMATION_INDUSTRIES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getAutomationIndustry(params.slug);
  if (!p) return { title: "Not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/ai-automation/${p.slug}`,
    image: p.image,
    keywords: [
      `AI automation ${p.industry.toLowerCase()}`,
      `AI automation services ${p.industry.toLowerCase()}`,
      `business automation ${p.industry.toLowerCase()}`,
      `workflow automation ${p.industry.toLowerCase()}`,
    ],
  });
}

export default function AutomationIndustryPage({ params }: { params: { slug: string } }) {
  const p = getAutomationIndustry(params.slug);
  if (!p) notFound();
  const path = `/ai-automation/${p.slug}`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "AI Automation", path: "/services/ai-automation" },
    { name: p.industry, path },
  ];
  return (
    <PageShell trail={trail}>
      <JsonLd data={graph([
        webPageSchema({ path, name: p.metaTitle, description: p.metaDescription }),
        breadcrumbSchema(trail),
        serviceSchema({ name: p.metaTitle.replace(" | Buildron", ""), description: p.answer, path, serviceType: "AI automation" }),
        faqSchema(p.faqs),
      ])} />
      <PageHero label={`AI Automation — ${p.industry}`} h1={p.h1} sub={p.metaDescription}>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link href="/services/ai-automation" className="text-sm text-voltsoft underline underline-offset-4">General AI automation service</Link>
          <Link href="/contact" className="text-sm text-voltsoft underline underline-offset-4">Discuss your workflow</Link>
        </div>
      </PageHero>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock><p>{p.answer}</p></AnswerBlock>
        <div className="mt-14 relative aspect-[21/9] rounded-2xl overflow-hidden card-border">
          <Image src={p.image} alt={`${p.industry} business operations — real photography`} fill sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
        </div>
        <section className="py-16" aria-labelledby="workflows-heading">
          <h2 id="workflows-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">AI automation workflows for {p.industry.toLowerCase()}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.workflows.map((w) => <article key={w.title} className="rounded-xl card-border bg-charcoal/40 p-6"><h3 className="font-display font-bold text-lg">{w.title}</h3><p className="mt-2.5 text-mist text-sm leading-relaxed">{w.desc}</p></article>)}
          </div>
        </section>
        <section className="py-10" aria-labelledby="channels-heading">
          <h2 id="channels-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tightest">Systems and channels we can connect</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {p.channels.map((c) => <span key={c} className="px-3.5 py-1.5 rounded-full bg-charcoal/80 border border-line/60 text-xs text-mist">{c}</span>)}
          </div>
        </section>
        <FaqBlock faqs={p.faqs} heading={`${p.industry} AI automation questions`} />
        <Cta title={`Need AI automation for ${p.industry.toLowerCase()}?`} sub="Send the process, the tools you already use and where your team is losing time. We will map the automation before recommending software." message={`Hi Buildron, I need AI automation for ${p.industry}.`} />
      </div>
    </PageShell>
  );
}
