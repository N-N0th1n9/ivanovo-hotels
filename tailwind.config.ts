import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "3xl": { max: '1949.99px' },
      "2xl": { max: '1789.99px' },
      xl: { max: '1439.99px' },
      lg: { max: '1279.99px' },
      md: { max: '1023.99px' },
      sm: { max: '834.99px' },
      '600px': { max: '599.99px' },
      xs: { max: '413.99px' },
      '2xs': {max: '344.99px'}
    },
    extend: {
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
export default config
