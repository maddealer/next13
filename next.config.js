const runtimeCaching = require("@imbios/next-pwa/cache");
const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  runtimeCaching,
  buildExcludes: [/app-build-manifest.json$/],
});

module.exports = withPWA({
  // next.js config
});
