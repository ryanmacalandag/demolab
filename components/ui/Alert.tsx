import React, { ReactNode } from "react";

function getAlertVariantsClasses(variant: string) {
  // loading default colors
  const icon: string = "text-muted-foreground ";
  const iconbg: string = "bg-muted-foreground/5 ";
  const bg: string = "bg-muted-foreground/2 ";
  const border: string = "border border-muted-foreground/7 ";

  switch (variant) {
    case "success":
      return {
        icon: "text-success ",
        iconbg: "bg-success/10 ",
        bg: "bg-success/5 ",
        border: "border border-success/10 ",
      };
    case "info":
      return {
        icon: "text-info ",
        iconbg: "bg-info/10 ",
        bg: "bg-info/5 ",
        border: "border border-info/10 ",
      };
    case "warning":
      return {
        icon: "text-warning ",
        iconbg: "bg-warning/10 ",
        bg: "bg-warning/5 ",
        border: "border border-warning/10 ",
      };
    case "danger":
      return {
        icon: "text-danger ",
        iconbg: "bg-danger/10 ",
        bg: "bg-danger/5 ",
        border: "border border-danger/10 ",
      };
    default:
      return { icon, iconbg, bg, border };
  }
}

export const AlertIcon: React.FC<{
  children: ReactNode;
  variant?: "success" | "info" | "warning" | "danger" | "muted";
}> = ({ children, variant = "muted" }) => {
  // retrieve classes for specified variant
  const { icon, iconbg } = getAlertVariantsClasses(variant);

  return (
    <div
      className={`alert-icon 
        ${icon} ${iconbg} 
        w-fit flex text-xl text-background px-6 py-6`}
    >
      {children}
    </div>
  );
};

export const AlertMessage: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={`alert-message  
        w-full flex flex-wrap items-center gap-x-1 pl-4 pr-8 py-4`}
    >
      {children}
    </div>
  );
};

export const AlertTitle: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={`alert-title text-lg tracking-tighter font-bold`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={`alert-description leading-5 opacity-80`}>{children}</div>
  );
};

const Alert: React.FC<{
  children: ReactNode;
  variant?: "success" | "info" | "warning" | "danger" | "muted";
}> = ({ children, variant = "muted" }) => {
  // retrieve classes for specified variant
  const { bg, border } = getAlertVariantsClasses(variant);

  return (
    <div
      className={`alert 
        ${bg} ${border}
        w-fit flex justify-stretch items-stretch rounded-lg overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Alert;
