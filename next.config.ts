import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: '',
        pathname: '/**',  // Allows all paths; customize if needed
      },
    ],
  }
};

export default nextConfig;


