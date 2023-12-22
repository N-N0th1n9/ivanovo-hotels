module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://ivhg.ru/hotel-selection',
        has: [
          { type: 'host', value: 'ivhg.ru' },
        ],
        permanent: true,
      },
    ];
  },
};