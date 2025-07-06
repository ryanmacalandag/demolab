import React from "react";
import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar";
import MenuTodoList from "./MenuTodoList";
import MenuTodoItem from "./MenuTodoItem";
import { CheckCircle2Icon, CircleDashedIcon } from "lucide-react";

export type TodoItem = {
  todo: string;
  checked?: boolean;
  category?: string[];
};

export const todoitemsdata: TodoItem[] = [
  {
    todo: "Devlab",
    checked: true,
    category: ["apps"],
  },
  {
    todo: "Parish Multi-tenant",
    checked: false,
    category: ["apps"],
  },
  {
    todo: "Catholic Design Resources",
    checked: false,
    category: ["apps"],
  },
];

function MenuTodos() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Todos</SidebarGroupLabel>
      <MenuTodoList>
        {todoitemsdata.map((item) => (
          <MenuTodoItem
            key={item.todo}
            className={(item?.checked && "opacity-100") || "opacity-35"}
          >
            {(item.checked && (
              <CheckCircle2Icon className="text-primary" />
            )) || <CircleDashedIcon />}
            {item.todo}
          </MenuTodoItem>
        ))}
      </MenuTodoList>
    </SidebarGroup>
  );
}

export default MenuTodos;
