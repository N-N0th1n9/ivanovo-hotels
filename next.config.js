module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://ivanovohotel.ivhg.ru/hotel/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://arthotel.ivhg.ru/hotel/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://ivhg.ru/hotel-selection',
        permanent: true,
      },
    ];
  },
};