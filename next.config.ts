import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Cloudflare R2 public bucket / signed URLs
      { protocol: "https", hostname: "**.r2.dev" },
      { protocol: "https", hostname: "**.r2.cloudflarestorage.com" },
      // OpenAI image responses (dev preview)
      { protocol: "https", hostname: "oaidalleapiprodscus.blob.core.windows.net" },
      // local placeholder mockups
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
