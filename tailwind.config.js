/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "grey-400": "#7c8db0",
        black: "#000",
        orange: "#ff5722",
        "grey-scale-black-75": "rgba(25, 24, 37, 0.75)",
        firebrick: "#bf0606",
        "grey-scale-black": "#191825",
        gainsboro: "#d9d9d9",
        gray: "#787676",
      },
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        body: "Inter",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "3xs": "10px",
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      lg: "18px",
      "4xl": "23px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      base: "16px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
