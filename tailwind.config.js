/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/reusable-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url(/images/tea-background.png)",
      },
      colors: {
        greenTip: "#6C7954",
        backgroundTip: "#E7E2DC",
        blackTip: "#3C3C3C",
      },
    },
  },
  plugins: [],
};
