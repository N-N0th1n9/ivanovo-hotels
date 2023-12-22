module.exports = {
  async redirects() {
    return [
      {
        source: '/(?!hotel)(.*)',
        destination: 'https://ivanovohotel.ivhg.ru/hotel',
        has: [
          { type: 'host', value: 'ivanovohotel.ivhg.ru' },
        ],
        permanent: true,
      },
      {
        source: '/(?!hotel)(.*)',
        destination: 'https://arthotel.ivhg.ru/hotel',
        has: [
          { type: 'host', value: 'arthotel.ivhg.ru' },
        ],
        permanent: true,
      },
      {
        source: '/(?!hotel-selection)(.*)',
        destination: 'https://ivhg.ru/hotel-selection',
        has: [
          { type: 'host', value: 'ivhg.ru' },
        ],
        permanent: true,
      },
    ];
  },
};