/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text': '#f3ecef',
        'background': '#0a0508',
        'primary': '#ad0000',
        'secondary': '#ff3d4d',
        'accent': '#850004',
      },
    },
  },
  plugins: [],
};