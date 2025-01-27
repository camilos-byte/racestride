/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    return config;
  },
};

module.exports = nextConfig;
