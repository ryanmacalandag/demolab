import React from "react";

export default function ContentBlockHeader({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="content-block-header" {...props}>
      {children}
    </div>
  );
}
