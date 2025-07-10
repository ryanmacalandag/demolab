import BadgeLink from "@/components/ui/BadgeLink";
import { ProjectType } from "@/data/allprojectsdata";
import { Slugify } from "@/util/Slugify";
import React, { PropsWithChildren } from "react";

export function ProjectTitleGroup({ project }: { project: ProjectType }) {
  return (
    <div className="project-title-group">
      <div className="flex gap-1">
        {project && (
          <BadgeLink
            href={`/projects/category/${Slugify(project.category)}`}
            className="mt-4 mb-2"
          >
            {project.category}
          </BadgeLink>
        )}
      </div>
      <h2 className="scroll-m-20 text-3xl md:text-3xl lg:text-5xl font-extrabold text-balance ">
        {project && project.title}
      </h2>
      <p className="text-muted-foreground text-balance text-lg sm:text-xl my-2 sm:my-4 ">
        {project && project.description}
      </p>
    </div>
  );
}

export default function ProjectWrapper({
  className,
  children,
  nopadding,
  ...props
}: {
  className?: string;
  nopadding?: boolean; // removes wrapper padding
} & PropsWithChildren) {
  return (
    <div
      className={`project-wrapper w-full flex flex-col justify-center items-center rounded-xl md:rounded-3xl ${
        nopadding ? "p-0 " : "px-4 sm:px-8 lg:px-12 py-6 sm:py-12 "
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
