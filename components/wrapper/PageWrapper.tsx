"use client";

import { useDarkModeContext } from "@/providers/DarkModeContext";
import React, { ReactNode } from "react";

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <main
      className={`${
        isDarkMode ? "page-wrapper-dark dark " : "page-wrapper "
      } w-full h-dvh flex flex-col gap-8 justify-center items-center font-[family-name:var(--font-inter)] text-foreground dark:text-background bg-background dark:bg-foreground transition duration-400 ease-out`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
