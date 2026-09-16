import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Cta({
  title,
  sub,
  message,
  label = "Talk to Buildron",
}: {
  title: string;
  sub: string;
  message: string;
  label?: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="rounded-2xl card-border bg-charcoal/40 p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest leading-tight max-w-2xl">
          {title}
        </h2>
        <p className="mt-4 text-mist max-w-xl leading-relaxed">{sub}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <WhatsAppButton message={message}>{label}</WhatsAppButton>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-line hover:border-volt/60 hover:bg-volt/10 text-paper px-7 py-3.5 rounded-full text-sm font-medium transition-all"
          >
            Send a project brief
          </Link>
        </div>
      </div>
    </section>
  );
}
