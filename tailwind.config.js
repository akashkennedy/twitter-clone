/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1d9bf0",
        "twitter-gray": "#71767b",
      },
    },
  },
  plugins: [],
};
