/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  dest: "public",
  // other Next.js config
});

export default nextConfig;
