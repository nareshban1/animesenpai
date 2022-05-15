module.exports = {
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    domains: ["s4.anilist.co", "cdn.myanimelist.net"],
  },
  swcMinify: true,
  styledComponents: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      module: false,
      buffer: require.resolve("buffer"),
      querystring: require.resolve("querystring-es3"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });
    return config;
  },
};
