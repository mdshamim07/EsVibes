/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false, // disable source maps for production
    webpack(config, options) {
      // Disable source maps in development mode if needed
      if (isDevelopment) {
        config.devtool = false; // or set to 'eval' for faster builds without source maps
      }
      return config;
    },
};

export default nextConfig;
