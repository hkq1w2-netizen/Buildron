/** @type {import('next').NextConfig} */

/**
 * Security headers applied to every response.
 * CSP is intentionally not set here: the site uses next/font and inline
 * JSON-LD, so a strict CSP needs nonce plumbing. See the implementation
 * report for the manual step.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // do not advertise the framework version
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static images are content-hashed by path and safe to cache hard.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy/likely inbound anchor paths -> canonical routes.
      { source: "/services/websites", destination: "/services/web-development", permanent: true },
      { source: "/services/webapps", destination: "/services/custom-business-systems", permanent: true },
      { source: "/services/ai-agents", destination: "/services/ai-chatbots", permanent: true },
      { source: "/services/erp", destination: "/services/erp-development", permanent: true },
      { source: "/services/social", destination: "/services/social-media-marketing", permanent: true },
      { source: "/work", destination: "/case-studies", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
      { source: "/blog", destination: "/guides", permanent: true },
      { source: "/blog/:slug", destination: "/guides", permanent: true },
    ];
  },
};

export default nextConfig;
