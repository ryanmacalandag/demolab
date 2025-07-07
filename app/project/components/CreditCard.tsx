import { CardSimIcon } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function CreditCard({
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
