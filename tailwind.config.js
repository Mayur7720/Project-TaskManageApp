/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Playfair Display", "serif"],
        customFont: ["Custom Font", "sans-serif"],
        anta: ["Anta", "sans-serif"],
        Basic: ["Basic", "sans-serif"],
        micro: ["Kalnia", "serif"],
        kode: ["Kode Mono", "monospace"],
        Bungee: ["Bungee Spice", "sans-serif"],
        Tilt: ["Tilt Warp", "sans-serif"],
        Prism: ["Tilt Prism", "sans-serif"],
      },
    },
  },
  plugins: [],
};
