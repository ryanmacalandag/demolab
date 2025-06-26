"use client";

import { useDarkModeContext } from "@/providers/DarkModeContext";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import Pill from "./Pill";

function DarkModeToggle({ className }: { className?: string }) {
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();

  return (
    <Pill onClick={() => setIsDarkMode((prev) => !prev)} className={className}>
      <span className="group-hover/pill:text-warning">
        {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
      </span>
      <span>Darkmode is {isDarkMode ? "on" : "off"}</span>
    </Pill>
  );
}

export default DarkModeToggle;
