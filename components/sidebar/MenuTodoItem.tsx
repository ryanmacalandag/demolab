import React, { ReactNode } from "react";
import { SidebarMenuButton } from "../ui/sidebar";

function MenuTodoItem({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  props?: React.ComponentProps<typeof SidebarMenuButton>;
}) {
  return (
    <SidebarMenuButton
      className={`menu-todo-list flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </SidebarMenuButton>
  );
}

export default MenuTodoItem;
