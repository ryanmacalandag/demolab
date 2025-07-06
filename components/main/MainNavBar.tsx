import React from "react";
import { ModeToggle } from "../ui/modetoggle";

import NavLogo from "../sidebar/NavLogo";

import MainSidebarTrigger from "./MainSidebarTrigger";
import { Button } from "../ui/button";
import { GitForkIcon } from "lucide-react";
import Link from "next/link";

function MainNavBar() {
  return (
    <div className="main-navbar flex shrink-0 justify-between items-stretch gap-2">
      <div className="main-navbar-primary flex items-stretch gap-2">
        <MainSidebarTrigger
          size="icon"
          className="h-full px-6 bg-foreground text-background"
        />
        <Link href="/" className="flex items-stretch">
          <NavLogo className="text-2xl lg:text-2xl tracking-tighter"></NavLogo>
        </Link>
      </div>
      <div className="main-navbar-secondary flex items-center gap-2 px-0 sm:px-4 py-3">
        <Button size="sm" variant="ghost">
          <GitForkIcon />
          Github
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default MainNavBar;
