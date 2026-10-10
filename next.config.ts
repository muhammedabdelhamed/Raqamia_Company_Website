import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    cpus: 1,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
