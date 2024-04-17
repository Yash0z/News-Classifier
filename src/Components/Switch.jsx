import React, { useState } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { TbSunFilled } from "react-icons/tb";
import { IconContext } from "react-icons";
export const Switch = () => {
  const [icon, setIcon] = useState(<PiMoonStarsFill />);

  const handleIcon = () => {
    if (icon.type === PiMoonStarsFill) {
      setIcon(<TbSunFilled />);
    } else {
      setIcon(<PiMoonStarsFill />);
    }
  };

  return (
    <>
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <button
        className="bg-slate-800 rounded-full p-1"
        onClick={handleIcon}
      >
        {icon}
      </button>
       </IconContext.Provider>
    </>
  );
};

export default Switch;
