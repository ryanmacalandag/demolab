"use client";

import { useDarkModeContext } from "@/providers/DarkModeContext";
import React, { ReactNode } from "react";

const SectionWrapper: React.FC<{
  children: ReactNode;
  fullpageheight?: boolean;
}> = ({ children, fullpageheight }) => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section
      className={`
        ${isDarkMode ? "section-wrapper-dark dark " : "section-wrapper "}
        ${fullpageheight && "h-dvh "}
        w-full flex flex-col gap-8 justify-center items-center`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
