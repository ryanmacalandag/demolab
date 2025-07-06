"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import React from "react";

function AppWrapper({ children, className }: React.ComponentProps<"div">) {
  return (
    <div className={`page-wrapper ${className}`}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  );
}

export default AppWrapper;
