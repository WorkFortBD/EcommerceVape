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
        primary: "#FF3D57",
        "primary-dark": "#F73751",
        "primary-light": "#FF8999",

        success: "#FF3D57",
        "success-dark": "#FF3D57",
        "success-light": "#FF3D57",
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
