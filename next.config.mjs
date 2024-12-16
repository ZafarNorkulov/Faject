/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization
    remotePatterns: [
      {
        protocol: "http",
        hostname: "31.128.44.221",
        port: "8000",
        pathname: "/media/product/**",
      },
     
    ],
  },
};

export default nextConfig;
