"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import usePexels from "@/hooks/use-pexels";
import { Photo } from "pexels";
import {
  BinocularsIcon,
  CameraIcon,
  ImageIcon,
  LoaderCircleIcon,
} from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
import Image from "next/image";

export function PexelsSearchBar({
  setQuery,
}: {
  query?: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(value);
  };

  console.log("(Logged from PexelsSearchBar.tsx) ", value);
  return (
    <div className="pexels-search-bar w-full px-0 sm:px-6 md:px-10 lg:px-24 xl:px-32 pb-6 md:pb-12">
      <div className="pexels-search-input group/search flex items-stretch bg-foreground/5 rounded-xl ">
        <div className="pexels-search-icon flex items-center px-2 bg-foreground text-background rounded-l-xl">
          <ImageIcon className="w-12" />
        </div>
        <form
          name="pexels-search-form"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-1 items-stretch text-xl md:text-xl"
        >
          <input
            name="search"
            aria-label="search"
            value={value}
            onChange={(e) => setValue(e.target.value.toLowerCase())}
            placeholder="Search for free photos on Pexels"
            className="w-full px-3 py-3 md:py-5 border-0 placeholder:text-foreground/40 transition"
          />
          <button
            type="submit"
            className="flex gap-1 items-center px-4 md:px-6 py-3 m-2 rounded-lg text-base uppercase focus:text-white/90 bg-primary/10 md:bg-transparent group-hover/search:bg-primary focus:bg-primary transition"
          >
            <BinocularsIcon className="size-7 group-hover/search:size-5 text-primary md:text-neutral-600 group-hover/search:text-white/90 transition" />
            <span className="hidden md:hidden md:group-hover/search:flex text-white/60 group-hover/search:text-white font-semibold transition">
              Search
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export function PexelsGrid({
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
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
                unoptimized
              />
            </a>
          );
        })}
    </div>
  );
}

export default function PexelsGallery() {
  const { photos, loading, error, query, setQuery } = usePexels("");
  console.log("(Logged from PexelsGallery.tsx hey)", error, query, photos);

  return (
    <ProjectWrapper nopadding>
      <SectionHeader className="w-full">
        <h3 className="section-title text-lg font-semibold pb-6">
          {(loading && "Loading search results...") || "Search Free Photos"}
        </h3>
      </SectionHeader>
      <PexelsSearchBar setQuery={setQuery} />
      {!photos ||
        (photos.total_results < 0 && <p>No photos found.</p>) ||
        (loading && (
          <p className="pexels-gallery-loader flex items-center flex-nowrap bg-foreground/3 px-4 sm:px-8 lg:px-12 py-6 sm:py-12">
            <LoaderCircleIcon className="animate-spin" /> Loading...
          </p>
        )) ||
        (photos && (
          <PexelsGrid
            photos={photos.photos}
            className="gap-4 md:gap-6 space-y-4 md:space-y-6"
          />
        ))}
    </ProjectWrapper>
  );
}
