import React, { PropsWithChildren } from "react";

export default function ProjectWrapper({
  className,
  children,
  nopadding,
  ...props
}: {
  className?: string;
  nopadding?: boolean; // removes wrapper padding
} & PropsWithChildren) {
  return (
    <div
      className={`project-wrapper w-full flex flex-col justify-center items-center rounded-xl md:rounded-3xl ${
        nopadding ? "p-0 " : "px-4 sm:px-8 lg:px-12 py-6 sm:py-12 "
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
