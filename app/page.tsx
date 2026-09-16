import type { Metadata } from "next";
import { pageMeta, graph, webPageSchema, faqSchema } from "@/lib/seo";
import { FAQS } from "@/data/faq";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import OpeningStatement from "@/components/sections/OpeningStatement";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Industries from "@/components/sections/Industries";
import AiAutomation from "@/components/sections/AiAutomation";
import BusinessSoftware from "@/components/sections/BusinessSoftware";
import LocalTrust from "@/components/sections/LocalTrust";
import WhyBuildron from "@/components/sections/WhyBuildron";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Estimator from "@/components/sections/Estimator";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import ControlPoint from "@/components/sections/ControlPoint";
import SystemCanvas from "@/components/system/SystemCanvas";

const TITLE = "Web Development & AI Automation Company in Pakistan | Buildron";
const DESC =
  "Buildron is a web development, AI automation, SEO and digital systems company in Pakistan. We build business websites, web apps, ecommerce stores, ERP software, AI workflows and social media growth systems.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESC, path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([webPageSchema({ path: "/", name: TITLE, description: DESC }), faqSchema(FAQS)])}
      />
      {/* One persistent generative layer for the whole narrative. It is
          decorative by contract — every word on this page is real DOM. */}
      <SystemCanvas />
      <Navbar />
      <main id="main" className="relative z-10" data-narrative>
        <Hero />
        <OpeningStatement />
        <Services />
        <FeaturedWork />
        <Industries />
        <AiAutomation />
        <BusinessSoftware />
        <LocalTrust />
        <WhyBuildron />
        <Process />
        <Pricing />
        <Estimator />
        <Faq />
        <Contact />
        <ControlPoint />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
