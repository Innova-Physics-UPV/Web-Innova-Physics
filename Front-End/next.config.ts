import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // Ignora errores de ESLint en el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignora errores de TypeScript en el build
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/web-innova-physics',
};

export default nextConfig;
