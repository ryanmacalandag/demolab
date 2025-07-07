"use client";

import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { CircleXIcon, MenuIcon } from "lucide-react";

interface MainSidebarTrigger
  extends React.ComponentProps<typeof SidebarTrigger> {
  iconOpenClass?: string;
  iconCloseClass?: string;
}

export default function MainSidebarTrigger({
  iconOpenClass,
  iconCloseClass,
  className,
  onClick,
  ...props
}: MainSidebarTrigger) {
  const { toggleSidebar, state } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="default"
      size="icon"
      className={`rounded-none ${className}`}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {(state === "collapsed" && <MenuIcon className={iconCloseClass} />) ||
        (state === "expanded" && <CircleXIcon className={iconOpenClass} />)}

      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
