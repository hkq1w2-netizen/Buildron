import { Suspense } from "react";
import Script from "next/script";
import PageViewTracker from "@/components/PageViewTracker";

const DEFAULT_GA_ID = "G-1QPVFHC2K5";

/** Google Analytics 4 site-wide installation. */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
