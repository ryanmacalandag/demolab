"use client";

import * as React from "react";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";

export function NavSecondary({
  className,
  ...props
}: {
  className?: string;
  props?: React.ComponentProps<"div">;
}) {
  const { setTheme } = useTheme();

  return (
    <SidebarGroup className={className} {...props}>
      <SidebarGroupContent>
        <SidebarGroupLabel className="text-xxs text-foreground/60 uppercase">
          Theme Settings
        </SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setTheme("light")} asChild>
              <a>
                <SunIcon />
                <span>Light</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setTheme("dark")} asChild>
              <a>
                <MoonIcon />
                <span>Dark</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setTheme("system")} asChild>
              <a>
                <ComputerIcon />
                <span>System</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
