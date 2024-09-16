import React, { useState, useEffect } from "react";

function Nothing() {
  // Initialize state with localStorage value before rendering
  const [theme, setTheme] = useState(
    () => localStorage.getItem("appTheme") || "light"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); // This ensures localStorage is checked once after mount.

  return (
    <div
      className={`${
        theme === "dark" || "system"
          ? "dark-theme bg-darkBg text-mainWhite"
          : "light-theme bg-white text-black"
      } h-screen flex justify-center items-center`}
    >
      Hello, the theme is {theme}
    </div>
  );
}

export default Nothing;
