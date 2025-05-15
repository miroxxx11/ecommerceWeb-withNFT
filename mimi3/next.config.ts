import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.prada.com", 
      },
      {
        protocol: "https",
        hostname: "balenciaga.dam.kering.com", 
      },
      {
        protocol: "https",
        hostname: "cdn.media.amplience.net", 
      },
      {
        protocol: "https",
        hostname: "assets.givenchy.com", 
      },
      {
        protocol: "https",
        hostname: "moncler-cdn.thron.com", 
      },
      {
        protocol: "https",
        hostname: "saint-laurent.dam.kering.com", 
      },
      {
        protocol: "https",
        hostname: "valentino-cdn.thron.com", 
      },
    ],
  }
}
export default nextConfig;
