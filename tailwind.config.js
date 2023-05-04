/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2.8rem",
        xl: "2.8rem",
        "2xl": "2.8rem",
      },
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "50%": { transform: "translateY(12px)", opacity: 1 },
          "90%": { transform: "translateY(14px)", opacity: 1 },
          "100%": { transform: "translateY(15px)", opacity: 0 },
        },
      },
      animation: {
        scroll: "scroll 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
