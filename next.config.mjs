/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**/image.png",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**/**.png",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**/**.jpg",
      },
    ],
  },
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
