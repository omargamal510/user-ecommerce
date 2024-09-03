/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "selector"; // or 'class' if you prefer manual control
export const theme = {
  extend: {},
};
export const plugins = [
  function ({ addComponents }) {
    addComponents({
      ".typography-h4": {
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "44px",
        color: "#F00", // Replace with your desired color
      },
    });
  },
];
