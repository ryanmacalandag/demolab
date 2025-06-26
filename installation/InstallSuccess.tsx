import React from "react";
import { RiBardFill } from "react-icons/ri";
import RowWrapper from "../components/wrapper/RowWrapper";
import Pill from "@/components/ui/Pill";
import DarkModeToggle from "@/components/ui/PillDarkModeToggle";
import { LuGithub, LuTriangle } from "react-icons/lu";
import Alert, {
  AlertDescription,
  AlertIcon,
  AlertMessage,
  AlertTitle,
} from "@/components/ui/Alert";

function InstallSuccess() {
  return (
    <>
      <RowWrapper>
        <Alert>
          <AlertIcon>
            <RiBardFill />
          </AlertIcon>
          <AlertMessage>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your blank Next.js app is ready.
            </AlertDescription>
          </AlertMessage>
        </Alert>
      </RowWrapper>
      <RowWrapper>
        <Pill
          href="https://vercel.com/import/git?s=https://github.com/ryanmacalandag/nextjs-blank"
          className="bg-primary/90 hover:bg-success text-background transition"
        >
          <LuTriangle />
          Deploy to Vercel
        </Pill>
        <Pill
          href="https://github.com/ryanmacalandag/nextjs-blank"
          className="bg-success/70 hover:bg-success text-background transition"
        >
          <LuGithub />
          View on Github
        </Pill>
        <DarkModeToggle className="bg-foreground/7 hover:bg-foreground hover:text-background transition" />
      </RowWrapper>
    </>
  );
}

export default InstallSuccess;
