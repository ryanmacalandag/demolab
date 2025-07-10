import React, { ReactNode } from "react";
import { Badge } from "./badge";

export default function BadgeLink({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Badge className={` ${className}`} asChild>
      <a href={href}>{children}</a>
    </Badge>
  );
}
