/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d4n0y8dshd77z.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
