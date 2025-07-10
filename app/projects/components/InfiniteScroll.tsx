"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import usePexels from "@/hooks/use-pexels";
import Image from "next/image";
import { Photo } from "pexels";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

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
        <div className="scroll-card relative group/card aspect-portrait h-full flex items-stretch text-sm text-white overflow-hidden rounded-lg shadow-2xl bg-gradient-to-b from-lime-100/35 to-65% to-transparent hover:saturate-150 hover:scale-105 transition">
          <div className="card-overlay absolute z-10 top-0 left-0 w-full h-full flex gap-2 flex-col justify-center items-center opacity-0 group-hover/card:opacity-100 group-hover/card:bg-slate-800/80 transition">
            <Image
              src="/logos/pexels-new-logo.svg"
              alt="Pexels.com"
              className="opacity-0 group-hover/card:opacity-100 transition"
              width={80}
              height={40}
            />
            <p className="text-xxs flex flex-col">
              <span>Photo by</span>
              <span>{photo.photographer}</span>
            </p>
            <Button
              size="sm"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 rounded-none mt-4 hover:bg-primary/60 bg-foreground/30"
              asChild
            >
              <a
                href={photo.url}
                target="_blank"
                className="flex justify-center items-center"
              >
                <EyeIcon />
                <span className="text-xxs uppercase tracking-wider">
                  View on Pexels
                </span>
              </a>
            </Button>
          </div>
          <Image
            src={photo.src.medium}
            alt={photo.photographer}
            width={300}
            height={400}
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
    <div className={`dummy-row flex flex-nowrap gap-6 ${className}`}>
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
  const { photos } = usePexels("fun", 20);
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
    <>
      <ProjectWrapper className="relative overflow-hidden px-0">
        <div className="w-full max-w-4xl flex flex-col gap-6 flex-nowrap">
          <DummyRow
            list={dummycards}
            className="animate-infinite-scroll-h"
            color={80}
          ></DummyRow>
          <DummyRow
            list={dummycards}
            className="animate-infinite-scroll-h-alt translate-x-16 saturate-80 ease-in-out"
            color={200}
          ></DummyRow>
        </div>
        <div className="fade-left absolute z-20 top-0 left-0 w-[160px] h-full bg-gradient-to-r from-background from-30% to-transparent"></div>
        <div className="fade-right absolute z-20 top-0 right-0 w-[160px] h-full bg-gradient-to-l from-background from-30% to-transparent"></div>
      </ProjectWrapper>
      <ProjectWrapper className="relative bg-teal-900/3 rounded-4xl px-0 overflow-hidden">
        <div className="w-full max-w-4xl flex flex-col gap-6 flex-nowrap">
          <DummyRow
            photoset={photoset}
            className="animate-infinite-scroll-h-reverse h-[280px]"
          ></DummyRow>
        </div>
        <div className="fade-left absolute z-20 top-0 left-0 w-[60px] h-full bg-gradient-to-r from-slate-900/5 to-transparent"></div>
        <div className="fade-right absolute z-20 top-0 right-0 w-[60px] h-full bg-gradient-to-l from-slate-900/5 to-transparent"></div>
      </ProjectWrapper>
    </>
  );
}
