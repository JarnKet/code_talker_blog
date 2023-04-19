/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
};

module.exports = nextConfig;
