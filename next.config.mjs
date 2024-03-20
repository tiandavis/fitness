/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/fitbod-web-internal/:path*',
        destination: 'https://storage.googleapis.com/fitbod-web-internal/:path*',
      },
    ];
  },
};

export default nextConfig;
