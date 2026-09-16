/**
 * Server-rendered JSON-LD. Uses a plain <script> (not next/script) so the
 * markup is present in the initial HTML for crawlers and answer engines.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is built from trusted first-party data only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
