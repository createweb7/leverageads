import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Reduces build output size — source maps aren't needed in production.
  productionBrowserSourceMaps: false,
  // sharp is a native binary — bundling it into the serverless function
  // (the default) can break its binary resolution in production even when
  // it works fine in local dev. Keep it external so Vercel loads it as-is.
  serverExternalPackages: ["sharp"],
  experimental: {
    serverActions: {
      // Admin image uploads (client logos, portfolio items, blog covers) are
      // capped at 8MB in src/lib/supabase/upload.ts — leave headroom for
      // multipart/form-data overhead above Next's 1MB default.
      bodySizeLimit: "10mb",
    },
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // All admin-uploaded images are already converted to WebP at upload
    // time (src/lib/supabase/upload.ts), so there's no need to also
    // generate AVIF variants here — that would only add another billed
    // format dimension on top of the existing WebP source.
    formats: ["image/webp"],
    // Trimmed from Next's defaults (which also include 3840 and 16) to
    // curb the number of distinct cached image variants Vercel bills for —
    // neither extreme is actually used anywhere on this site.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 70, 75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vayanjkhduebbdfeszhj.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/case-studies/avira-diamonds",
        destination: "/case-studies/pondicherry-sri-lakshmi-jewellery",
        permanent: true,
      },
      // Legacy WordPress URLs (leverageads.com) — preserves existing Google
      // rankings/backlinks/indexed pages by mapping every old indexed page
      // to its equivalent on the new site instead of letting them 404.
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us-leverage-ads-cloned-10", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/clients", destination: "/", permanent: true },
      { source: "/video-gallery", destination: "/services/ad-films-photography", permanent: true },
      {
        source: "/how-to-choose-a-brand-name-and-why-abc-just-wont-work-anymore",
        destination: "/insights/how-to-choose-a-brand-name-and-why-abc-just-wont-work-anymore",
        permanent: true,
      },
      {
        source: "/how-a-branding-photoshoot-and-celebrity-photoshoot-can-elevate-your-image",
        destination: "/insights/how-a-branding-photoshoot-and-celebrity-photoshoot-can-elevate-your-image",
        permanent: true,
      },
      {
        source: "/emotional-intelligence-in-theatre-acting",
        destination: "/insights/emotional-intelligence-in-theatre-acting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
