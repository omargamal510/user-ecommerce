/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export let darkMode = "class"; // or 'class' if you prefer manual control
export const theme = {
  extend: {
    colors: {
      textPrimary: "#111827",
      textSecondary: "#6B7280",
      primaryMain: "#5048E5",
    },
  },
};
export const plugins = [
  function ({ addComponents }) {
    addComponents({
      ".typography-h4": {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "44px",
      },

      ".typography-body-2": {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "21.98px",
      },

      ".components-input-label": {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "12px",
        letterSpacing: "0.15px",
      },
    });
  },
];
