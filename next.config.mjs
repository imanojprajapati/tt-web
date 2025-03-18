/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
        if (!dev) {
          config.optimization.minimize = false;
        }
        return config;
    }
};

export default nextConfig;
