import React from "react";

function PageWrapper({ children, className }: React.ComponentProps<"div">) {
  return <div className={`page-wrapper ${className}`}>{children}</div>;
}

export default PageWrapper;
