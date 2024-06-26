/** @type {import("next").NextConfig} */
module.exports = {
   webpack: (config) => {
      config.module.rules.push({
         test: /\.svg$/i,
         use: ["@svgr/webpack"],
      });
      return config;
   },
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
   },
};
