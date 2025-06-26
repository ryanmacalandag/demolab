"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface DarkModeContextInterface {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextInterface | undefined>(
  undefined
);

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "useDarkModeContext() must be used within a DarkModeProvider"
    );
  }
  return context;
};

interface DarkModeProviderInterface {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderInterface> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
