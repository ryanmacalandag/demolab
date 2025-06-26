"use client";

import { useDarkModeContext } from "@/providers/DarkModeContext";
import React, { ReactNode } from "react";

const DarkPageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <main
      className={`${
        isDarkMode ? "dark-page-wrapper dark " : "dark-page-wrapper light "
      } w-full h-full min-h-dvh flex flex-col gap-8 justify-center items-center font-[family-name:var(--font-inter)] text-foreground dark:text-background bg-background dark:bg-foreground transition duration-400 ease-out`}
    >
      {children}
    </main>
  );
};

export default DarkPageWrapper;
