/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F76241',
          dark: '#d94e30',
          light: '#f88c70',
          bg: '#FFF4F1',
        },
      },
    },
  },
  plugins: [],
};
