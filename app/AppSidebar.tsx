"use client";

import MainSidebarTrigger from "@/components/main/MainSidebarTrigger";
import { MenuPrimary } from "@/components/sidebar/MenuPrimary";
import MenuTodos from "@/components/sidebar/MenuTodos";
import { NavSecondary } from "@/components/sidebar/NavSecondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { primarymenulist } from "@/data/menudata";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="sidebar" {...props}>
      <SidebarContent className="sidebar-content group-data-[collapsibled]:px-6 pt-2">
        <MenuPrimary menuprimary={primarymenulist} />
        <MenuTodos />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="sidebar-footer w-full px-0 py-0 flex bg-foreground/4 hover:bg-primary/8 text-foreground hover:text-primary transition">
        <MainSidebarTrigger
          iconCloseClass="size-4"
          iconOpenClass="size-4"
          className="sidebar-trigger h-8 px-6 py-5 flex justify-center transition"
        ></MainSidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
