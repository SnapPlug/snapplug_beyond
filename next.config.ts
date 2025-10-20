import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 빌드 최적화
  output: 'standalone',
  
  // 이미지 최적화 설정
  images: {
    unoptimized: false,
  },
  
  // 빌드 최적화
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
  
  // TypeScript 설정
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint 설정
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
