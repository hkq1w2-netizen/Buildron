import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import Prose from "@/components/page/Prose";

const TITLE = "Terms of Use | Buildron";
const DESC = "The terms that apply to using the Buildron website and to engaging Buildron for work.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/terms" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export default function TermsPage() {
  return (
    <PageShell trail={trail}>
      <JsonLd data={graph([webPageSchema({ path: "/terms", name: TITLE, description: DESC }), breadcrumbSchema(trail)])} />
      <PageHero label="Legal" h1="Terms of use" sub="What this website is, what it is not, and what governs work we do together." />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <Prose>
          <p className="text-mist/60 text-sm">Last updated 15 September 2026.</p>

          <h2>About this website</h2>
          <p>
            This website describes Buildron&apos;s services and published work. It is operated by Buildron from{" "}
            {SITE.city}, {SITE.region}, {SITE.country}. Using the site means accepting the terms below.
          </p>

          <h2>Information is general, not advice</h2>
          <p>
            The guides and service descriptions on this site are general information. They are not technical, legal,
            financial or business advice for your specific situation, and should not be acted on as though they were.
            Decisions about your own systems should be made with reference to your actual circumstances.
          </p>

          <h2>Pricing</h2>
          <p>
            Any prices or ranges shown are indicative starting points, not quotations or offers. Actual pricing is
            confirmed in writing against a defined scope before work begins, and may differ from the ranges published
            here.
          </p>

          <h2>No guarantee of search results</h2>
          <p>
            Buildron does not guarantee search rankings, traffic volumes or lead volumes. Search engines are controlled
            by third parties and their results cannot be promised by anyone. We commit to the work described in a
            scope, not to an outcome we do not control.
          </p>

          <h2>Project work</h2>
          <p>
            Work Buildron carries out for a client is governed by the written scope, quotation and any agreement signed
            for that engagement. Where those documents conflict with anything on this website, those documents apply.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content, design and code of this website belong to Buildron. Work delivered to a client is governed by
            the terms of that engagement; our standard position is that the client owns the delivered code, database
            and documentation on full payment.
          </p>

          <h2>Third-party links</h2>
          <p>
            This site may link to third-party websites. We do not control their content and are not responsible for
            it.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated. The date above reflects the most recent revision. Questions can be sent to{" "}
            {SITE.email}.
          </p>
        </Prose>
      </div>
    </PageShell>
  );
}
