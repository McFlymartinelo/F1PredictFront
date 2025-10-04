/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        neonRed: "#FF0028",
        neonBlue: "#00BFFF",
        graySecondary: "#1C1C1C",
        textPrimary: "#F4F4F4"
      },
      fontFamily: {
        orbitron: ["Orbitron_700Bold", "sans-serif"],
        inter: ["Inter_400Regular", "sans-serif"]
      },
      borderRadius: {
        xl: "12px"
      },
      boxShadow: {
        neonRed: "0 0 8px #FF0028AA",
        neonBlue: "0 0 8px #00BFFFAA"
      }
    }
  },
  plugins: []
};
