/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wefit-react-web-test.s3.amazonaws.com',
        port: '',
      },
    ],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
