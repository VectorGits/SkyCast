/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // to enable darkmode using class strategy
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
}