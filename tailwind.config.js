/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geometry: ['"Geometry"', "sans-serif"],
        permanent: ['"Permanent"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
