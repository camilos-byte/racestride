/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
        // Configuración de Webpack para la caché
        config.cache = {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename], // Archivo actual
            },
            version: '1.0', // Cambia según lo que necesites
        };

        // Retorna la configuración modificada
        return config;
    },
};

module.exports = nextConfig;
