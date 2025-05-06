import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'], // Allow images from Unsplash
  },
  /* other config options can go here */
};

export default nextConfig;
