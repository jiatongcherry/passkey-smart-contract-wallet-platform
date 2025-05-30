/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Add SWC compiler options
  experimental: {
    swcMinify: true,
    forceSwcTransforms: true, // Forces SWC even if native binary isn't available
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes missing dependencies errors
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // Preserve existing fallbacks
        fs: false,
        net: false,
        tls: false,
        // Add other problematic modules if needed
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),
      };
    }
    
    return config;
  },
  // Optional: Configure SWC to use WASM if native binary fails
  compiler: {
    swcMinify: true,
  },
};

module.exports = nextConfig;