import React, { useEffect, useState } from "react";

import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme" ? localStorage.getItem("theme") : "light")
  );
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="light-mode-button"
        className={`w-12 
            cursor-pointer
            absolute
            right-0
            z-10
            ${theme === "dark" ? "opacity-0" : "opacity-100"}
            transition-all
            duration-300
            `}
      />
      <img
        src={DarkButton}
        alt="light-mode-button"
        className={`w-12 cursor-pointer ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
