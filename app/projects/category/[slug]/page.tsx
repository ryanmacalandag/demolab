import React from "react";
import { allcategories, allprojectsdata } from "@/data/allprojectsdata";
import { Slugify } from "@/util/Slugify";
import ContentBlockHeader from "@/components/main/ContentBlockHeader";
import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import ContentBreadCrumb from "@/components/main/ContentBreadCrumb";
import MainWrapper from "@/components/main/MainWrapper";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { BrowseSimilarProjects } from "@/components/sections/BrowseSimilarProjects";
import ContentBlockTitle from "@/components/main/ContentBlockTitle";

// Unexisting project slugs will get 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await allcategories;
  return categories.map((cat) => ({
    slug: Slugify(cat),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = allcategories.find((cat) => Slugify(cat) === slug);
  const projects = allprojectsdata.filter((proj) => proj.category === category);

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
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{category}</BreadcrumbItem>
            </BreadcrumbList>
          </ContentBreadCrumb>
          <ContentBlockTitle>
            <h2 className="scroll-m-20 text-3xl md:text-3xl lg:text-5xl font-extrabold text-balance ">
              {category}
            </h2>
          </ContentBlockTitle>
          <BrowseSimilarProjects projects={projects} />
        </ContentBlockHeader>
      </ContentBlockWrapper>
    </MainWrapper>
  );
}
