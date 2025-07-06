import React, { ReactNode } from "react";

export default function SectionContent({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  props?: React.PropsWithChildren;
}) {
  return (
    <div className={`section-content ${className}`} {...props}>
      {children}
    </div>
  );
}
