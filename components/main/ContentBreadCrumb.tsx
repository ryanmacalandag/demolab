import React from "react";
import { Breadcrumb } from "../ui/breadcrumb";

export default function ContentBreadCrumb({
  children,
  ...props
}: React.ComponentProps<typeof Breadcrumb>) {
  return <Breadcrumb {...props}>{children}</Breadcrumb>;
}
