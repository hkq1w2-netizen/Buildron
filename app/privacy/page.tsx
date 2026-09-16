import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { pageMeta, graph, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/page/PageShell";
import PageHero from "@/components/page/PageHero";
import Prose from "@/components/page/Prose";

const TITLE = "Privacy Policy | Buildron";
const DESC = "How Buildron collects, uses and stores information submitted through this website.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/privacy" });

const trail = [
  { name: "Home", path: "/" },
  { name: "Privacy", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <PageShell trail={trail}>
      <JsonLd data={graph([webPageSchema({ path: "/privacy", name: TITLE, description: DESC }), breadcrumbSchema(trail)])} />
      <PageHero label="Legal" h1="Privacy policy" sub="What this website collects, what it does not, and how to have information removed." />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <Prose>
          <p className="text-mist/60 text-sm">Last updated 15 September 2026.</p>

          <h2>What this website collects</h2>
          <p>
            This website does not store submitted data on its own servers. The enquiry form on this site does not send
            anything to a Buildron database. When you complete it, the details you entered are formatted into a
            WhatsApp message that opens in your own WhatsApp application. Nothing is transmitted until you choose to
            send that message, and you can edit or discard it first.
          </p>

          <h2>Analytics</h2>
          <p>
            Where analytics is enabled, this site uses Google Analytics 4 with IP anonymisation to record aggregate
            usage — pages viewed, approximate region, device type and referral source. This is used to understand which
            pages are useful. It is not used to identify individuals, and no analytics data is sold or shared with
            advertisers. Buildron does not run advertising on this website.
          </p>

          <h2>Information you send us directly</h2>
          <p>
            When you contact Buildron by WhatsApp or email, we hold what you send — your name, contact details and
            whatever you tell us about your project — in order to respond and, if we work together, to deliver the
            work. We do not sell it, rent it or share it with third parties for marketing.
          </p>

          <h2>Third-party services</h2>
          <p>
            Contacting us through WhatsApp means your message is also processed by WhatsApp under its own privacy
            terms. Fonts on this site are served by Google Fonts, and the site is hosted on infrastructure that keeps
            standard server logs. These are ordinary parts of operating a website rather than data Buildron collects
            about you.
          </p>

          <h2>Client project data</h2>
          <p>
            Where Buildron builds or maintains a system for a client, any business data inside that system belongs to
            the client. We access it only as needed to deliver or support the work, and we do not use it for any other
            purpose.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>You can browse this website without submitting anything.</li>
            <li>You can block analytics using your browser settings or an extension.</li>
            <li>
              You can ask us to delete any information you have sent us by emailing {SITE.email}. We will confirm once
              it is done.
            </li>
          </ul>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to {SITE.email} or via WhatsApp on {SITE.phone}. Buildron operates
            from {SITE.city}, {SITE.region}, {SITE.country}.
          </p>
        </Prose>
      </div>
    </PageShell>
  );
}
