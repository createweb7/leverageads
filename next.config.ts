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
    ];
  },
};

export default nextConfig;
