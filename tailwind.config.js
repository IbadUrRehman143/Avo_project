/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
     colors:{
      "my-gray":"#6c757d",
      "my-red":"#d1002c",
      "my-iio": "#b3b3b3",
     }
    },
  },
  plugins: [],
}