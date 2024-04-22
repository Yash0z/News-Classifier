import React, { useState } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { TbSunFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

export const Switch = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    const bodyClassList = document.body.classList;
    if (isLightTheme) {
      bodyClassList.remove("light");
      bodyClassList.add("dark");
    } else {
      bodyClassList.remove("dark");
      bodyClassList.add("light");
    }
  };

  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <button
        className="bg-background rounded-full p-1 "
        onClick={toggleTheme}
      >
        {isLightTheme ? <TbSunFilled /> : <PiMoonStarsFill />}
      </button>
    </IconContext.Provider>
  );
};

export default Switch;
