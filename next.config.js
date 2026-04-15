/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90, 100],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig; 
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
