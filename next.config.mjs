import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next doesn't pick up the
  // stray package-lock.json in the user's home directory.
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
