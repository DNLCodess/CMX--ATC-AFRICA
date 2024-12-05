/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#328DF5",
        secondary: "#fffff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        instrument: ['"Instrument Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
