import React from "react";

function ContentCardGrid({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`content-card-grid grid grid-cols-12 gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContentCardGrid;
