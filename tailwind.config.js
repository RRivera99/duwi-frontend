/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  debugScreens: {
    ignore: ["dark"]
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Sans'],
      },
      colors: {
        fondito: "#F1F1F1",
        clarito: "#E3D8ED",
        lila: "#A29EDA",
        moradito: "#5F5985",
        morado: "#27243A",
        oscuro: "#0B0712",
        search: "#E5E4E4" 
      }
    },
  },
}        