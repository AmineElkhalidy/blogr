/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Overpass, sans-serif",
    },
    extend: {
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        lighterRed: "hsl(355, 100%, 74%)",
        darkBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        darkGrayishBue: "hsl(207, 13%, 34%)",
        darkBlackBlue: "hsl(240, 10%, 16%)",
      },
    },
  },
  plugins: [],
};
