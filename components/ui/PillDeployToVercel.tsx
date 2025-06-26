import Link from "next/link";
import React from "react";
import { RiVercelFill } from "react-icons/ri";

function DeployToVercelPill() {
  return (
    <Link
      href="https://vercel.com/import/git?s=https://github.com/ryanmacalandag/nextjs-blank"
      target="_blank"
      title="Deploy to Vercel"
      role="button"
      className="flex items-center text-nowrap gap-2 border border-transparent dark:border-foreground/10 rounded-full px-3 py-1 hover:bg-foreground hover:text-background transition duration-200 ease-in-out"
    >
      <RiVercelFill />
      Deploy to Vercel
    </Link>
  );
}

export default DeployToVercelPill;
