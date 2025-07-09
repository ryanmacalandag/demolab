import ContentBlockWrapper from "@/components/main/ContentBlockWrapper";
import MainWrapper from "@/components/main/MainWrapper";
import SectionViewGithub from "@/components/sections/SectionViewGithub";
import TechStackSection from "@/components/sections/TechStackSection";
import { BrowseProjects } from "@/components/sections/BrowseProjects";
import { allprojectsdata } from "@/data/allprojectsdata";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function HomePage() {
  return (
    <MainWrapper className="bg-linear-to-bl/oklch from-foreground/0 via-foreground/5 via-30% to-foreground/5 pl-3 sm:pl-12 lg:pl-8 pr-3 sm:pr-12 lg:pr-14 py-6 sm:py-8 lg:py-8">
      <div className="home-hero-section h-fit min-h-[35vh] p-0">
        <div className="hero-wrapper grid grid-cols-12 grid-rows-2 md:grid-rows-1 items-stretch">
          <div className="hero-left col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-10 lg:pb-14">
            <div className="flex flex-col gap-4">
              <Badge>Home</Badge>
              <h1 className="scroll-m-20 w-full max-w-[600px] text-4xl md:text-3xl lg:text-5xl font-bold">
                An isolated corner to explore freely
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base sm:text-base lg:text-xl my-2 sm:my-3 ">
                Tucked away from the usual trappings of the everyday normal
                life, I escape here to freely experiment, explore and expand my
                creative horizon.
              </p>
            </div>
          </div>
          <div className="hero-right w-full h-full col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 align-bottom">
            <div className="hero-character group/hero relative w-full h-full">
              <Image
                src="/hero/hero-character.svg"
                alt="hero image"
                width={800}
                height={800}
                className="absolute md:absolute z-10 top-0 left-0 w-full h-full md:h-full object-cover object-top-left px-10 md:pt-4"
              />
              <div className="hero-character-floaters">
                <Image
                  src="/hero/floater1.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-20 top-5/8 left-2/8 w-1/8 group-hover/hero:-translate-x-6 hovered::-translate-x-6 transition ease-in-out"
                />
                <Image
                  src="/hero/floater2.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-5 top-5/12 left-5/12 w-1/8 scale-80 group-hover/hero:translate-x-1 transition ease-in-out"
                />
                <Image
                  src="/hero/floater3.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-20 top-6/12 left-9/12 w-1/8 scale-80 group-hover/hero:translate-x-3 transition ease-in-out"
                />
                <Image
                  src="/hero/floater4.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-20 top-10/12 left-4/12 w-1/8 scale-80 group-hover/hero:-translate-x-2 transition ease-in-out"
                />
                <Image
                  src="/hero/floater5.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-5 top-3/12 left-9/12 w-1/8 scale-80 group-hover/hero:translate-x-1 transition ease-in-out"
                />
                <Image
                  src="/hero/cloud1.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-7 top-4/12 left-8/12 w-2/8 group-hover/hero:translate-x-6 transition ease-in-out"
                />
                <Image
                  src="/hero/cloud1.svg"
                  alt="floater"
                  width={60}
                  height={60}
                  className="absolute z-12 top-10/12 left-2/12 w-3/8 rotate-y-180 group-hover/hero:translate-x-20 transition ease-in-out duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentBlockWrapper className="-translate-y-0 sm:-translate-y-0 md:translate-0">
        <BrowseProjects projects={allprojectsdata} />
        <TechStackSection />
        <SectionViewGithub />
      </ContentBlockWrapper>
    </MainWrapper>
  );
}

export default HomePage;
