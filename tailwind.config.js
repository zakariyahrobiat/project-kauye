/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: "#333942",
        grey: "#4A515E",
        placeHolder: "#606A7B",
        blue: "#567CD7",
        button: "#0582FD",
        border: "#959EAC",
        ash: "#8D8D8D",
        input: "rgba(51, 57, 66, 0.02)",
        silver: "rgba(51, 57, 66, 0.2)",
        terms: "#131313",
        code: "#0093B9",
        bold: "#040C22",
        light: "#363D4E",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans - serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
