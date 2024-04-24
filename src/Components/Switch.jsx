import React, { useState, useEffect } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { TbSunFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

export const Switch = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsLightTheme(storedTheme !== "dark"); 
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLightTheme;
    setIsLightTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  };

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (isLightTheme) {
      bodyClassList.remove("dark");
      bodyClassList.add("light");
    } else {
      bodyClassList.remove("light");
      bodyClassList.add("dark");
    }
  }, [isLightTheme]);

  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <button
        className="bg-background rounded-full p-1"
        onClick={toggleTheme}
      >
        {isLightTheme ? <TbSunFilled /> : <PiMoonStarsFill />}
      </button>
    </IconContext.Provider>
  );
};

export default Switch;
