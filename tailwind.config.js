/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#191622", // HSL(250, 21%, 11%) konvertert til HEX
          "secondary": "#212529",
          "accent": "#665c33", // HSL(44, 40%, 08%) konvertert til HEX
          "neutral": "#d4b257", // HSL(44, 50%, 16%) konvertert til HEX
          "base-100": "#ffffff",
          "info": "#ffffff", // Ingen info, brukt hvit
          "success": "#339b76", // HSL(152, 38%, 42%) konvertert til HEX
          "warning": "#d4b257", // Samme som button-hover for konsistens
          "error": "#ff0000",
          "border": "#000000",
          "stars": "#ffff00",
          "stars-empty": "#808080",
        },
      },
    ],
  },
};
