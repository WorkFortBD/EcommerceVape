/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#d19a4b",
      },
      fontSize: {
        base: "14px",
        md: "16px",
        xsm: "10px",
        sm: "12px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
