import React from "react";

function MainWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`main-wrapper bg-foreground/5 w-full h-full min-h-dvh scroll-m-20 pl-3 sm:pl-12 lg:pl-8 pr-3 sm:pr-12 lg:pr-14 py-6 sm:py-8 lg:py-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default MainWrapper;
