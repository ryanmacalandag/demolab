"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import usePexels from "@/hooks/use-pexels";
import Image from "next/image";
import { Photo } from "pexels";

export function ScrollCard({
  label,
  color,
}: {
  label: string;
  color?: number;
  props?: PropsWithChildren;
}) {
  const bgcolor = `hsl(${color} 95% 38%)`;
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className="scroll-card flex items-center px-6 py-12 text-3xl text-white font-serif font-semibold rounded-3xl shadow-2xl bg-gradient-to-b from-lime-100/35 to-65% to-transparent hover:saturate-150 hover:scale-105 transition"
          style={{ backgroundColor: bgcolor }}
        >
          {label}
        </div>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function ScrollImage({
  photo,
}: {
  photo: Photo;
  props?: PropsWithChildren;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="scroll-card h-[140px] flex items-center text-sm text-white overflow-hidden rounded-lg shadow-2xl bg-gradient-to-b from-lime-100/35 to-65% to-transparent hover:saturate-150 hover:scale-105 transition">
          <Image
            src={photo.src.small}
            alt={photo.photographer}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            loading="lazy"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>{`Photo by ${photo.photographer}`}</TooltipContent>
    </Tooltip>
  );
}

export function DummyRow({
  list,
  photoset,
  className,
  color = 40,
}: {
  list?: string[];
  photoset?: Photo[];
  className?: string;
  color?: number;
}) {
  return (
    <div className={`dummy-row w-full flex flex-nowrap gap-6 ${className}`}>
      {list &&
        list.map((item, key) => (
          <ScrollCard label={item} color={(key * color + 60) / 5} key={key} />
        ))}
      {photoset &&
        photoset.map((item, key) => <ScrollImage photo={item} key={key} />)}
    </div>
  );
}

export default function InfiniteScroll() {
  const { photos } = usePexels("fun");
  const [photoset, setPhotoSet] = useState<Photo[]>([]);

  useEffect(() => {
    async function getPhotoset() {
      const res = await photos?.photos.map((ph) => ph);
      if (res != undefined && res.length > 0) {
        setPhotoSet(res);
      }
    }
    getPhotoset();
  }, [photos]);

  // dummy cards
  const dummycards: string[] = [
    "trade",
    "eight",
    "noise",
    "bravado",
    "jest",
    "brown",
    "kitten",
    "desk",
    "auto",
    "charades",
    "board",
    "train",
  ];

  return (
    <ProjectWrapper className="bg-foreground/3 overflow-hidden">
      <div className="flex flex-col gap-6 flex-nowrap">
        <DummyRow
          list={dummycards}
          className="animate-infinite-scroll-h"
          color={80}
        ></DummyRow>
        <DummyRow
          photoset={photoset}
          className="animate-infinite-scroll-h-reverse delay-1000"
        ></DummyRow>
        <DummyRow
          list={dummycards}
          className="animate-infinite-scroll-h translate-x-16 ease-in-out"
          color={170}
        ></DummyRow>
      </div>
    </ProjectWrapper>
  );
}
