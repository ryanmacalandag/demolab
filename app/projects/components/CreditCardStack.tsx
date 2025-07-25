import React, { ReactNode } from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import { CardSimIcon } from "lucide-react";
import Image from "next/image";

export function CreditCard({
  className,
  name,
  number,
  ...props
}: {
  className?: string;
  children?: ReactNode;
  name?: string;
  number?: string;
  props?: React.FC;
}) {
  return (
    <div
      className={`credit-card group/cc absolute w-full max-w-80 flex flex-col text-white/95 aspect-creditcard border-l-2 border-b-2
            hover:ring-2 ring-foreground/10 rounded-xl px-6 pt-10 pb-8 hover:scale-105 hover:shadow-xl transition ${className} `}
      {...props}
    >
      <p className="font-light text-xl">{name || "Everyday Saver"}</p>
      <p className="text-teal-200/40 group-hover/cc:text-foreground-400/90 transition">
        {number || "0055 3456 3322 8800"}
      </p>
      <CardSimIcon
        className="rotate-90 text-amber-400/80 mt-4 stroke-1"
        size={38}
      />
      <p className="text-sm text-foreground/30 mt-2 font-serif font-stretch-125%">
        {`///////////////////////////`}
      </p>
      <Image
        src="/projects/mastercard.svg"
        alt="mastercard logo"
        width={600}
        height={300}
        className="absolute bottom-2 right-6 size-18"
      />
    </div>
  );
}

export default function CreditCardStack() {
  return (
    <ProjectWrapper className="">
      <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-y-20 md:gap-14">
        <div className="w-full col-span-6 flex bg-stone-300/30 rounded-2xl">
          <div className="credit-card-stack group/stack relative w-full h-full flex justify-center items-center">
            <CreditCard
              name="Nacho Libre"
              className="border-pink-500 bg-pink-950 bg-gradient-to-bl from-pink-950 via-pink-950 hover:via-pink-900 to-pink-700 group-hover/stack:-translate-x-1/3 -translate-x-4 hover:translate-y-0 hover:scale-105 hover:-rotate-0 hover:z-10"
            />
            <CreditCard
              name="Nancy Drew Little"
              className="border-lime-500 bg-lime-950 bg-gradient-to-bl from-lime-950 via-lime-950 hover:via-lime-900 to-lime-700 hover:translate-y-0 hover:scale-105 hover:z-10"
            />
            <CreditCard
              name="Maria Taberna"
              className="border-amber-500 bg-amber-950 bg-gradient-to-bl from-amber-950 via-amber-950 hover:via-amber-900 to-amber-700 group-hover/stack:translate-x-1/3 translate-x-4 hover:translate-y-0 hover:scale-105 hover:-rotate-0 hover:z-10"
            />
            <div
              className="credit-card-dummy w-full max-w-80 aspect-creditcard bg-foreground/0"
              aria-hidden
            ></div>
          </div>
        </div>
        <div className="w-full col-span-6 flex bg-stone-300/30 rounded-2xl">
          <div className="credit-card-stack group/stack relative w-full h-full flex justify-center items-center">
            <CreditCard
              name="Allen Iverson"
              className="border-indigo-500 bg-indigo-950 bg-gradient-to-bl from-indigo-950 via-indigo-950 hover:via-indigo-900 to-indigo-800 hover:to-indigo-400
            hover:scale-105 translate-x-0 -translate-y-0 -rotate-10 hover:rotate-0 skew-x-6 hover:skew-x-0 skew-y-6 hover:-skew-y-0
            group-hover/stack:-translate-x-10 group-hover/stack:translate-y-6 hover:z-10"
            />
            <CreditCard
              name="Michael Jordan"
              className="border-teal-500 bg-teal-950 bg-gradient-to-bl from-teal-950 via-teal-950 hover:via-teal-900 to-teal-800 hover:to-teal-400
            hover:scale-105 translate-x-4 -translate-y-4 -rotate-10 hover:-rotate-0 skew-x-6 hover:skew-x-0 skew-y-6 hover:skew-y-0 hover:z-10"
            />
            <CreditCard
              name="Donita Rose"
              className="border-purple-500 bg-purple-950 bg-gradient-to-bl from-purple-950 via-purple-950 hover:via-purple-900 to-purple-700 hover:to-purple-400
            hover:scale-105 translate-x-8 -translate-y-8 -rotate-10 hover:rotate-0 skew-x-6 hover:skew-x-0 skew-y-6 hover:-skew-y-0 group-hover/stack:translate-x-16 group-hover/stack:-translate-y-16 hover:z-10"
            />
            <div
              className="credit-card-dummy w-full max-w-80 aspect-creditcard bg-foreground/0"
              aria-hidden
            ></div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
