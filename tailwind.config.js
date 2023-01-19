/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#999ea2',
          200: '#858b8f',
          300: '#71777b',
          400: '#5f6467',
          500: '#4c5052',
          600: '#393c3e',
          700: '#26282a',
          800: '#131415',
          900: '#010101'
        }
      }
    }
  },
  plugins: []
}
