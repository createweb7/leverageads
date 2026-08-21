import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
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
