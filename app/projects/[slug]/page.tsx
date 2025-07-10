import ContentBlockHeader from "@/components/main/ContentBlockHeader";
import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import ContentBreadCrumb from "@/components/main/ContentBreadCrumb";
import MainWrapper from "@/components/main/MainWrapper";
import { BrowseSimilarProjects } from "@/components/sections/BrowseSimilarProjects";
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
import { ProjectTitleGroup } from "../components/ui/ProjectWrapper";

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
          {project && <ProjectTitleGroup project={project} />}
        </ContentBlockHeader>
        {project && <project.contentfc />}
        <BrowseSimilarProjects projects={similarprojects} />
      </ContentBlockWrapper>
    </MainWrapper>
  );
}
