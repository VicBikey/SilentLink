/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2D2D2D',
        navy: '#1B263B',
        slate: '#3A3D46',
        teal: '#004C4C',
        forest: '#1D3B3A',
      },
    },
  },
  plugins: [],
}

