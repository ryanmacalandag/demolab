"use client";

import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";

export default function MainSidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof SidebarTrigger>) {
  const { toggleSidebar, state } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="default"
      size="icon"
      className={cn("rounded-none", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {(state === "collapsed" && <PanelLeftOpenIcon className="size-5" />) || (
        <PanelLeftCloseIcon className="size-5" />
      )}

      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
