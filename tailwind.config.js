/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your file structure
  ],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "3/4": "75%",
      },
    },
  },
  plugins: [],
};
