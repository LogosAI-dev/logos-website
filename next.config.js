/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态HTML导出
  images: {
    unoptimized: true, // Cloudflare Pages需要禁用图片优化
    remotePatterns: [],
  },
}

module.exports = nextConfig
