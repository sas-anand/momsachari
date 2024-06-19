/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      keyframes: {
        colorToggle: {
          '0%, 100%': { color: '#ff0000' }, // Initial and final color
          '50%': { color: '#00ff00' },      // Middle color
        },
      },
      animation: {
        colorToggle: 'colorToggle 2s infinite', // Define the animation with duration and infinite repetition
      },
      
    },
  },
  plugins: [],
};



