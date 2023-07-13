/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-100': '#1D1D1F',
        'dark-90': '#363638',
        'dark-80': '#505051',
        'dark-70': '#69696B',
        'dark-60': '#838384',
        'dark-50': '#9C9C9E',
        'dark-40': '#B5B5B6',
        'dark-30': '#CFCFD1',
        'dark-20': '#E8E8E9',
        'dark-10': '#F5F5F7',
        'primary-light': '#206D72',
        'primary-dark': '#78CBD0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-gradient': "url('/public/assets/images/bg_gradient.jpg')",
      },
    },
  },
  plugins: [],
}
