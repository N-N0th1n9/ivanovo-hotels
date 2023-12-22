// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: 'https://ivanovohotel.ivhg.ru/:path*',
        destination: 'https://ivanovohotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: 'https://arthotel.ivhg.ru/:path*',
        destination: 'https://arthotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: 'https://ivhg.ru/',
        destination: 'https://ivhg.ru/hotel-selection',
        permanent: true,
      },
    ];
  },
};
