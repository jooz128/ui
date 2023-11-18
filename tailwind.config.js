/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
  corePlugins: {
    transitionProperty: false,
    transitionDuration: false,
  },
}