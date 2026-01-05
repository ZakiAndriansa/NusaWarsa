/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Enable TypeScript and ESLint checks to catch hydration errors
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Optimize package imports (stable feature, no experimental warning)
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Optimize on-demand entries
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // Keep pages in memory for 60s
    pagesBufferLength: 5, // Buffer length
  },

  // Suppress webpack warnings for OpenTelemetry dependencies
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      config.ignoreWarnings = [
        { module: /node_modules\/require-in-the-middle/ },
      ];
    }

    // Handle leaflet for client-side only
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        leaflet: require.resolve('leaflet'),
      };
    }

    // Optimize chunk loading
    if (dev && !isServer) {
      config.output = {
        ...config.output,
        chunkLoadTimeout: 60000, // 60 seconds timeout for dev
      };
    }

    return config;
  },
};

module.exports = nextConfig;
