module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    experimental: {
      concurrentFeatures: true,
    },
  };
  return nextConfig;
};
