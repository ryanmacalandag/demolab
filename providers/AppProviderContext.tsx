import React, { ReactNode } from "react";
import { DarkModeProvider } from "./DarkModeContext";

interface AppProviderInterface {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderInterface> = ({ children }) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};

export default AppProvider;
