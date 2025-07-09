import React from "react";

function ContentBlockTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`content-block-title flex flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContentBlockTitle;
