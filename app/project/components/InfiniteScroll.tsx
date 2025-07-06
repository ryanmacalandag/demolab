import React from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import Image from "next/image";

export default function InfiniteScroll() {
  return (
    <ProjectWrapper className="bg-foreground/3 overflow-hidden">
      <div className="h-58 flex flex-nowrap animate-infinite-scroll-h">
        <Image
          src="/projects/codepen-infinity-scroll.png"
          alt="scroll"
          width={1200}
          height={300}
        />
        <Image
          src="/projects/codepen-infinity-scroll.png"
          alt="scroll"
          width={1200}
          height={600}
          className="object-cover"
        />
      </div>
    </ProjectWrapper>
  );
}
