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
        clash: [" ClashDisplay-Medium", "sans-serif"],
      },
      colors: {
        primary: "#B5FF00",
        sec: "#0D292A",
        whites: "#FFFFFF",
        tertiary: "#354C4D",
      },
    },
  },

  plugins: [],
};
