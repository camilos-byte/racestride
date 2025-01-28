/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
    },
  },
};

module.exports = nextConfig;
