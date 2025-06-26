"use client";

import React, { ReactNode } from "react";
import { Attribute, ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderPropsInterface {
  children: ReactNode;
  attribute: Attribute | Attribute[] | undefined;
  defaultTheme: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderPropsInterface> = ({
  children,
  attribute,
  defaultTheme,
  enableSystem,
}) => {
  return (
    <NextThemeProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      {children}
    </NextThemeProvider>
  );
};
