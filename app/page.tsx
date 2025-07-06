import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import MainWrapper from "@/components/main/MainWrapper";
import { Badge } from "@/components/ui/badge";
import { projectsdata } from "@/data/appdata";
import { BrowseProjectsSection } from "@/components/sections/BrowseProjectsSection";
import { HomeIcon } from "lucide-react";
import ContentBlockHeader from "@/components/main/ContentBlockHeader";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import ContentBreadCrumb from "@/components/main/ContentBreadCrumb";
import SectionViewGithub from "@/components/sections/SectionViewGithub";
import TechStackSection from "@/components/sections/TechStackSection";
import { BrowseProjects } from "@/components/sections/BrowseProjects";
import { allprojectsdata } from "@/data/allprojectsdata";

function HomePage() {
  return (
    <MainWrapper>
      <ContentBlockWrapper>
        <ContentBlockHeader>
          <ContentBreadCrumb className="pb-4 md:pb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </ContentBreadCrumb>
          <Badge className="mt-4 mb-2">
            <HomeIcon />
            Home
          </Badge>
          <h2 className="scroll-m-20 text-3xl md:text-3xl lg:text-5xl font-extrabold text-balance ">
            An isolated corner to explore freely
          </h2>
          <p className="text-muted-foreground text-balance text-lg sm:text-xl my-2 sm:my-4 ">
            Tucked away from the usual trappings of the everyday normal life, I
            escape here to freely experiment, explore and expand my creative
            horizon.
          </p>
        </ContentBlockHeader>
        <BrowseProjects projects={allprojectsdata} />
        <BrowseProjectsSection projects={projectsdata} />
        <TechStackSection />
        <SectionViewGithub />
      </ContentBlockWrapper>
    </MainWrapper>
  );
}

export default HomePage;
