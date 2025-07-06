import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SectionViewGithub({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="section-view-github group/cta w-full grid grid-cols-12 md:grid-cols-12 bg-foreground text-background rounded-3xl overflow-hidden"
      {...props}
    >
      <div className="col-span-12 md:col-span-8 rounded-xl md:rounded-2xl px-10 sm:px-14 lg:px-20 py-12 md:py-16 flex flex-col gap-6 transition">
        <h4 className="font-extralight text-4xl sm:text-4xl lg:text-5xl text-balance">
          View this project on Github
        </h4>
        <p className="text-base md:text-lg opacity-70">
          This project uses Next.js, Shadcn, Tailwind, React and React-Icons.
          Deployment is through Vercel. You may clone this project on Github.
        </p>
        <Button
          size="lg"
          className="w-fit mt-auto group-hover/cta:-translate-y-1"
        >
          <MagnifyingGlassIcon />
          View on Github
        </Button>
      </div>
      <div className="relative col-span-12 md:col-span-4 content transition">
        <div className="absolute top-0 left-0 w-fill md:w-full h-full bg-gradient-to-t md:bg-gradient-to-l from-transparent via-65% via-transparent group-hover/cta:via-30% to-foreground transition duration-500"></div>
        <Image
          src="/stock/bigstock-developer-dark-snazz.jpg"
          title="developer dark snazz"
          alt="section image - developer dark snazz"
          width={940}
          height={320}
          className="w-full h-full object-cover"
        ></Image>
      </div>

      {children}
    </div>
  );
}
