import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://images.pexels.com/**')],
  }
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}



export default nextConfig;
