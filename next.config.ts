import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    serverActions: {
      // Admin image uploads (client logos, portfolio items, blog covers) are
      // capped at 8MB in src/lib/supabase/upload.ts — leave headroom for
      // multipart/form-data overhead above Next's 1MB default.
      bodySizeLimit: "10mb",
    },
  },
  images: {
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
