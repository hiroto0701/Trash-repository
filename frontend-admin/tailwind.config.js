/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        TrainOne: ["'Train One', system-ui"],
        intel: ["'Inter', sans-serif"]
      },
    },
  },
  plugins: [],
}