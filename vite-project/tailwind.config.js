/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
      xl: "1280px",
    },
    extend: {
      maxWidth: {
        "1/2": "1200px",
      },
      minWidth: {
        icon: "20px",
      },
      height: {
        128: "100vh-14px",
      },
    },
  },
  plugins: [],
};
