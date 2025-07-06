import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { PrimaryMenuType } from "@/data/menudata";

export function MenuPrimary({
  menuprimary,
}: {
  menuprimary: PrimaryMenuType[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {menuprimary.map((menu) => (
          <Collapsible
            key={menu.name}
            asChild
            defaultOpen={menu.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={menu.name}>
                  {menu.icon && <menu.icon />}
                  <span>{menu.name}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {menu.submenuitems?.length ? (
                <>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {menu.submenuitems?.map((sub) => (
                        <SidebarMenuSubItem key={sub.name}>
                          <SidebarMenuSubButton asChild>
                            <a href={sub.url}>
                              <span>{sub.name}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
