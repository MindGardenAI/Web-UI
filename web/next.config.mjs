/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's.gravatar.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
