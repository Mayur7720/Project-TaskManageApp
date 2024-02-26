/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Playfair Display", "serif"],
        customFont: ['"Custom Font"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
