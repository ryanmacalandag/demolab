"use client";

import MainSidebarTrigger from "@/components/main/MainSidebarTrigger";
import { MenuPrimary } from "@/components/sidebar/MenuPrimary";
import MenuTodos from "@/components/sidebar/MenuTodos";
import { NavSecondary } from "@/components/sidebar/NavSecondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { primarymenulist } from "@/data/menudata";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="sidebar" {...props}>
      <SidebarHeader className="sidebar-header">
        <SidebarMenu className="sidebar-menu flex items-stretch"></SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="sidebar-content group-data-[collapsibled]:px-6">
        <MenuPrimary menuprimary={primarymenulist} />
        <MenuTodos />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="sidebar-footer w-full px-0 py-0 flex">
        <MainSidebarTrigger className="sidebar-trigger w-full h-8 px-3 py-5 flex justify-end bg-foreground/4 hover:bg-primary/8 text-foreground hover:text-primary transition"></MainSidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
