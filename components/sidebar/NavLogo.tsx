import React from "react";

function NavLogo({ className }: { className: string }) {
  return (
    <h1
      className={`logo flex items-center text-primary font-logo ${className}`}
    >{`\<demolab\>`}</h1>
  );
}

export default NavLogo;
