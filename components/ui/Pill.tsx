import React, { ReactNode } from "react";

const Pill: React.FC<{
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: string;
  onClick?: () => void;
}> = ({ children, className, onClick }) => {
  return (
    <button
      className={`pill group/pill w-fit flex items-center flex-nowrap text-nowrap gap-1 text-xxs uppercase px-[10px] py-1 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Pill;
