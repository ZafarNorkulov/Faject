/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // ESLint xatolarini build vaqtida aniqlash
  },
  typescript: {
    ignoreBuildErrors: false, // TypeScript xatolarini aniqlash
  },
  reactStrictMode: true,

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
