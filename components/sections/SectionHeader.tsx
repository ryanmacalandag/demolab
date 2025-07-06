import React from "react";

export default function SectionHeader({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="section-header" {...props}>
      {children}
    </div>
  );
}
