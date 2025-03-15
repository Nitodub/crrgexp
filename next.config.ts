import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['bit.ly'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**'
      }
    ]
  },
  webpack: (config) => {
        config.resolve.extensionAlias = {
            ".js": [".ts", ".tsx", ".js"],
        };

        return config;
    },

    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
}

export default nextConfig;
