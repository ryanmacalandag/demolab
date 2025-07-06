import React, { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  props?: React.PropsWithChildren;
}) {
  return (
    <div className={`section-wrapper ${className}`} {...props}>
      {children}
    </div>
  );
}
