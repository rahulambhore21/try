/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  // other Next.js config
});

export default nextConfig;
