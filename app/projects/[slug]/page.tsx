import ContentBlockHeader from "@/components/main/ContentBlockHeader";
import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import ContentBreadCrumb from "@/components/main/ContentBreadCrumb";
import MainWrapper from "@/components/main/MainWrapper";
import { BrowseSimilarProjects } from "@/components/sections/BrowseSimilarProjects";
import { Badge } from "@/components/ui/badge";
import BadgeLink from "@/components/ui/BadgeLink";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allprojectsdata } from "@/data/allprojectsdata";
import { Slugify } from "@/util/Slugify";
import { HomeIcon } from "lucide-react";
import React from "react";

// Unexisting project slugs will get 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const allprojects = await allprojectsdata;
  return allprojects.map((proj) => ({
    slug: Slugify(proj.title),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = allprojectsdata.find((proj) => Slugify(proj.title) === slug);
  const similarprojects = allprojectsdata.filter(
    (proj) => project?.category === proj.category
  );
  return (
    <MainWrapper>
      <ContentBlockWrapper>
        <ContentBlockHeader>
          <ContentBreadCrumb className="pb-4 md:pb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex">
                  <HomeIcon size={14} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{project?.title}</BreadcrumbItem>
            </BreadcrumbList>
          </ContentBreadCrumb>
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
        </ContentBlockHeader>
        {project && <project.contentfc />}
        <BrowseSimilarProjects projects={similarprojects} />
      </ContentBlockWrapper>
    </MainWrapper>
  );
}
