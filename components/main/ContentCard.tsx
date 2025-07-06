import React from "react";
import { Card } from "../ui/card";

function ContentCard({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={`content-card gap-4 col-span-12 sm:col-span-6 lg:col-span-4 shadow-none rounded-lg border-foreground/10 hover:border-primary/80 bg-foreground/2 hover:bg-primary/5 transition ${className}`}
      {...props}
    >
      {children}
    </Card>
  );
}

export default ContentCard;
