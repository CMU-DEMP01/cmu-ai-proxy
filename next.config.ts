const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
});
module.exports = {
  async rewrites() {
    return [
      {
        source: "/flashers-proxy/:path*",
        destination: "http://192.168.2.120:7173/flashers/:path*", 
      },
    ];
  },
};
