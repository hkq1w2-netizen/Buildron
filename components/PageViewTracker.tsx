"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const w = window as GtagWindow;
    if (typeof w.gtag !== "function") return;

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    w.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
