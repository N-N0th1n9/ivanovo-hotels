module.exports = {
  async redirects() {
    return [
      {
        source: '',
        destination: 'https://ivanovohotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: '',
        destination: 'https://arthotel.ivhg.ru/hotel',
        permanent: true,
      },
      {
        source: '',
        destination: 'https://ivhg.ru/hotel-selection',
        permanent: true,
      },
    ];
  },
};