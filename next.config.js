// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:subdomain(ivanovohotel)/:path*',
        destination: 'https://ivanovohotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: '/:subdomain(arthotel)/:path*',
        destination: 'https://arthotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: '/:domain(ivhg)',
        destination: 'https://ivhg.ru/hotel-selection',
        permanent: true,
      },
    ];
  },
};
