/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#94ADCF",
        secondary: "#38404B",
        text: "#94ADCF",
      }
    },
  },
  plugins: [],
}

