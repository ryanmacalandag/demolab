import React from "react";

function ContentBlockWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`content-block-wrapper flex flex-col gap-8 sm:gap-8 lg:gap-12 px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-10 lg:pb-14 rounded-xl md:rounded-3xl bg-background/90 dark:bg-background/30 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContentBlockWrapper;
