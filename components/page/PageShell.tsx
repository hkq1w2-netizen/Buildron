import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/**
 * Shared chrome for every non-home route: skip link target, breadcrumbs,
 * one <main> landmark, and consistent header/footer.
 */
export default function PageShell({
  trail,
  children,
}: {
  trail: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="relative pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
        </div>
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
