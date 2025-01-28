/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            // Agrega otras rutas aquí si es necesario
        }
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
