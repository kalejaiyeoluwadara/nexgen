/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "900px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        clash: [" ClashDisplay-Regular", "sans-serif"],
        clashmd: [" ClashDisplay-Medium", "sans-serif"],
        clashsm: [" ClashDisplay-Semibold", "sans-serif"],
        clashreg: [" ClashDisplay-Regular", "sans-serif"],
        clashbold: [" ClashDisplay-Bold", "sans-serif"],
      },
      colors: {
        primary: "#B5FF00",
        sec: "#0D292A",
        whites: "#FFFFFF",
        new: "#E8FFB0",
        pry800: "#648C00",
        pry900: "#4C6B00",
        tertiary: "#354C4D",
        pr2: "#E8FFB0",
      },
    },
  },

  plugins: [],
};
