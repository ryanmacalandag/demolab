import React, { ReactNode } from "react";

function MenuTodoList({
  children,
  ...props
}: {
  children: ReactNode;
  props?: React.ComponentProps<"div">;
}) {
  return (
    <div className="menu-todo-list flex flex-col" {...props}>
      {children}
    </div>
  );
}

export default MenuTodoList;
