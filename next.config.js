module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://ivanovohotel.ivhg.ru/hotel',
        has: [
          { type: 'host', value: 'ivanovohotel.ivhg.ru' },
        ],
        permanent: true,
      },
      {
        source: '/(.*)',
        destination: 'https://arthotel.ivhg.ru/hotel',
        has: [
          { type: 'host', value: 'arthotel.ivhg.ru' },
        ],
        permanent: true,
      },
      {
        source: '/(.*)',
        destination: 'https://ivhg.ru/hotel-selection',
        has: [
          { type: 'host', value: 'ivhg.ru' },
        ],
        permanent: true,
      },
    ];
  },
};