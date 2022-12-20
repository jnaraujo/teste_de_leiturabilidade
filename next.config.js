/* eslint-disable import/no-extraneous-dependencies */
const TerserPlugin = require("terser-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: String(process.env.ANALYZE).trim() === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // eslint-disable-next-line no-param-reassign
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new TerserPlugin({ parallel: true }));
    }
    return config;
  },
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
    },
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    legacyBrowsers: false,
    optimizeCss: true,
  },
  compress: false,
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
