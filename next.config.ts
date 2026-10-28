import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind CSS 4 loader for Turbopack
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Allow stock photos from Unsplash. Remove this if you only use files from /public.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
};

export default nextConfig;
