/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/plans/basic',
        destination: 'https://drive.google.com/uc?id=1oUjI7_q23T-QE2jH41luyMSsrZqGYSgI&export=download&authuser=0',
        permanent: true
      },
      {
        source: '/plans/premium',
        destination: 'https://drive.google.com/uc?id=1eAzBULChTPoZmNNyvPFDiv7XDYWS_Jqq&export=download&authuser=0',
        permanent: true
      },
      {
        source: '/plans/customizable',
        destination: 'https://drive.google.com/uc?id=1iLqttJZzG-gX4zSadmTRemL1aSnoNoqo&export=download&authuser=0',
        permanent: true
      },
      {
        source: '/contacto',
        destination: 'https://wa.me/573216356932',
        permanent: true
      }
    ]
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
