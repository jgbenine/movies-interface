/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // '/pages/**.{jsx}'
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: '#090C15',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        relway: ['Relway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
