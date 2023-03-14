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
        background: "linear-gradient(170.28deg, #FFFFFF -9.44%, #F2F2F2 100%);",
      },
    },
  },
  plugins: [],
};
