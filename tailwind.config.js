/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "brandColor" : "#17C2EC",
      },
    },
    container: {
      center: true,
      padding:{
        DEFAULT : "35px",
        md : "50px",
        lg : "0px"
      },
    },
    fontFamily:{
      "Montserrat" : ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}