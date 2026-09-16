import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import AnswerBlock from "@/components/page/AnswerBlock";
import Contact from "@/components/sections/Contact";
import RelatedLinks from "@/components/page/RelatedLinks";

const TITLE = "Contact Buildron — Faisalabad, Pakistan";
const DESC = `Contact Buildron in ${SITE.city}, Pakistan. Message us on WhatsApp at ${SITE.phone} to discuss a website, ERP or automation project.`;

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/contact" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <PageShell trail={trail}>
      <JsonLd
        data={graph([
          { ...webPageSchema({ path: "/contact", name: TITLE, description: DESC }), "@type": "ContactPage" },
          breadcrumbSchema(trail),
        ])}
      />

      <PageHero
        label="Contact"
        h1="Talk to Buildron"
        sub="WhatsApp is the fastest route and usually gets a reply the same day. Email works if you would rather send documents or a written brief."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnswerBlock>
          <p>
            Reach Buildron on WhatsApp at{" "}
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-voltsoft underline underline-offset-4">
              {SITE.phone}
            </a>{" "}
            or by email at{" "}
            <a href={`mailto:${SITE.email}`} className="text-voltsoft underline underline-offset-4">
              {SITE.email}
            </a>
            . We are based in {SITE.city}, {SITE.region}, Pakistan, and work with clients across Pakistan and
            internationally.
          </p>
        </AnswerBlock>

        <section className="pt-14" aria-labelledby="what-to-send">
          <h2 id="what-to-send" className="font-display text-2xl md:text-3xl font-bold tracking-tightest">
            What to include in your first message
          </h2>
          <ul className="mt-6 space-y-3 max-w-3xl">
            {[
              "What your business does, in one line.",
              "The problem you want solved — not the solution you think you need.",
              "Anything already in place: a current website, software, or the spreadsheet doing the work today.",
              "Rough budget range and any deadline that actually matters.",
            ].map((i) => (
              <li key={i} className="flex gap-3 text-mist leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt shrink-0" aria-hidden="true" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-mist text-sm max-w-2xl leading-relaxed">
            That is usually enough for us to tell you whether we are the right fit and give a realistic range, without
            a meeting.
          </p>
        </section>
      </div>

      <Contact />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RelatedLinks
          heading="Before you get in touch"
          services={["web-development", "ai-automation", "erp-development"]}
          guides={["ai-automation-small-business", "spreadsheets-to-erp"]}
        />
      </div>
    </PageShell>
  );
}
