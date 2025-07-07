"use client";

import React from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import usePexels from "@/hooks/use-pexels";
import PexelsGrid from "./PexelsGrid";
import { LoaderCircleIcon } from "lucide-react";
import PexelsSearchBar from "./PexelsSearchBar";
import SectionHeader from "@/components/sections/SectionHeader";

export default function PexelsGallery() {
  const { photos, loading, error, query, setQuery } = usePexels("");
  console.log("(Logged from PexelsGallery.tsx)", error, query, photos);

  return (
    <ProjectWrapper nopadding>
      <SectionHeader className="w-full">
        <h3 className="section-title text-lg font-semibold pb-6">
          {(loading && "Loading search results...") || "Search Free Photos"}
        </h3>
      </SectionHeader>
      <PexelsSearchBar setQuery={setQuery} />
      {!photos ||
        (photos.total_results === undefined && <p>No photos found.</p>) ||
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
