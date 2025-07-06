import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import MainWrapper from "@/components/main/MainWrapper";
import { projectsdata } from "@/data/appdata";
import { BrowseProjectsSection } from "@/components/sections/BrowseProjectsSection";
import ContentBlockHeader from "@/components/main/ContentBlockHeader";

export function DashboardPage() {
  return (
    <MainWrapper className="bg-foreground/2">
      <ContentBlockWrapper>
        <ContentBlockHeader>
          <h2 className="scroll-m-20 text-3xl md:text-3xl lg:text-5xl font-extrabold text-balance ">
            Welcome to the Dashboard
          </h2>
          <p className="text-muted-foreground text-balance text-lg sm:text-xl my-2 sm:my-4 ">
            Tucked away from the usual trappings of the everyday normal life, I
            escape here to freely experiment, explore and expand my creative
            horizon.
          </p>
        </ContentBlockHeader>
        <BrowseProjectsSection projects={projectsdata} />
      </ContentBlockWrapper>
    </MainWrapper>
  );
}
