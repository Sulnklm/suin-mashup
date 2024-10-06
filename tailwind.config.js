/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      "xs": "375px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

    },

    extend: {
      fontFamily: {
        silk: ['"Silkscreen", sans-serif'],

        protest: ['"Protest Strike", sans-serif'],

        work: ['"Work Sans", sans-serif']

      }
    },
  },
  plugins: [],
};
