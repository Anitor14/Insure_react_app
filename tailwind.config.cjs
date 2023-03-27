/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkViolet: "hsl(256, 26%, 20%)",
        grayishBlue: "hsl(216, 30%, 68%)",
        veryDarkViolet: "hsl(270, 9%, 17%)",
        darkGrayishViolet: "hsl(273, 4%, 51%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
