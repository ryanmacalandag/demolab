"use client";

import { CameraIcon } from "lucide-react";
import Image from "next/image";
import { Photo } from "pexels";
import React from "react";

export default function PexelsGrid({
  photos,
  className,
  ...props
}: {
  photos?: Photo[];
  className?: string;
  props?: React.FC;
}) {
  return (
    <div
      className={`pexels-grid w-full columns-2 lg:columns-3 ${className}`}
      {...props}
    >
      {photos &&
        photos.map((photo) => {
          return (
            <a
              href={photo.url}
              target="blank"
              key={photo.id}
              className="pexel-grid-item relative group/item flex rounded-xl overflow-hidden md:mb-6"
            >
              <div className="pexel-item-overlay absolute z-50 w-full h-full md:opacity-0 md:group-hover/item:opacity-100 transition">
                <div className="overlay-pexel-author absolute z-40 bottom-4 left-4 flex items-center flex-nowrap gap-2 text-white/90 text-xs tracking-tight md:text-sm font-bold md:-translate-x-full group-hover/item:translate-x-0 transition duration-500 ease-out">
                  <CameraIcon className="text-white/80 bg-primary/80 p-1 md:p-2 rounded-full size-6 md:size-8" />
                  {photo.photographer}
                </div>
                <div className="overlay-pexels-logo absolute z-40 top-3 md:top-6 right-3 md:right-6 fill-white/90 md:-translate-y-full md:group-hover/item:translate-y-0 transition duration-500 ease-out">
                  <Image
                    src="/logos/pexels-new-logo.svg"
                    alt="pexels logo"
                    width={100}
                    height={50}
                    className="w-12 md:w-16"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
                    unoptimized
                  />
                </div>
                <div className="overlay-gradient absolute z-30 w-full h-1/3 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <Image
                src={photo.src.large}
                alt={photo.alt || photo.photographer}
                width={600}
                height={600}
                className="pexel-photo w-full h-full object-cover group-hover/item:scale-105 transition"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </a>
          );
        })}
    </div>
  );
}
