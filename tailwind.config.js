/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40A3C0",
        primary80: "#80D9FF",
        secondary: "#C34D43",
        offWhiteBG: "#fefcf7",
        darkgray: "#444",
        defaultgray: "#777",
        lightgray: "#ddd",
      },
    },
  },
  plugins: [],
};
