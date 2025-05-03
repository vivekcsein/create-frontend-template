import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  //loading images from githubusercontent.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  //rewrite only works on client components
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://www.${process.env.APP_HOST}.in/api/:path*`,
      },
      {
        source: '/admin/:path*',
        destination: `https://www.${process.env.APP_HOST}.in/api/admin/:path*`,
      },
    ]
  },
};

export default nextConfig;
