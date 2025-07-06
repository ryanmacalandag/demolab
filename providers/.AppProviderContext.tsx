"client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

interface AppProviderInterface {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderInterface> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
