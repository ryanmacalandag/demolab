import React from "react";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import SectionContent from "./SectionContent";
import Image from "next/image";

export type TechStackType = {
  name: string;
  icon: string;
  link: string;
};

export const techstackdata: TechStackType[] = [
  {
    name: "VS Code",
    icon: "/logos/vscode-svgrepo-com.svg",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "CSS",
    icon: "/logos/css-3-svgrepo-com.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Javascript",
    icon: "/logos/javascript-155-svgrepo-com.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: "/logos/react-svgrepo-com-blue.svg",
    link: "https://react.dev/",
  },
  {
    name: "NextJS",
    icon: "/logos/next-js-svgrepo-com.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Vercel",
    icon: "/logos/vercel-fill-svgrepo-com.svg",
    link: "https://vercel.com/",
  },
  {
    name: "Tailwind",
    icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn",
    icon: "/logos/shadcn-ui-seeklogo.svg",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Github",
    icon: "/logos/github-svgrepo-com.svg",
    link: "https://github.com",
  },
  {
    name: "Lucide",
    icon: "/logos/lucide-logo.svg",
    link: "https://lucide.dev/icons",
  },
];

export default function TechStackSection() {
  return (
    <SectionWrapper className="sectiontech-stack">
      <SectionHeader>
        <h3 className="section-title text-lg font-semibold py-6">
          Built using a modern stack
        </h3>
      </SectionHeader>
      <SectionContent>
        <div
          className="tech-stack-grid w-full flex flex-row items-baseline flex-wrap gap-3 md:gap-8"
          aria-hidden="true"
        >
          {techstackdata &&
            techstackdata.map((tech) => (
              <div
                key={tech.name}
                className="group/logo w-12 sm:w-16 lg:w-20 hover:opacity-90 hover:-translate-y-1 transition"
              >
                <a
                  href={tech.link}
                  className="flex flex-col justify-center items-center"
                  target="_blank"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="tech-logo w-full h-full object-cover"
                  />
                  <div className="w-full text-center text-xs py-3 text-nowrap whitespace-nowrap">{`${tech.name}`}</div>
                </a>
              </div>
            ))}
        </div>
      </SectionContent>
    </SectionWrapper>
  );
}

export function TechStackSectionScroll() {
  return (
    <SectionWrapper className="sectiontech-stack">
      <SectionHeader>
        <h3 className="section-title text-lg font-semibold py-6">
          Modern Stack
        </h3>
      </SectionHeader>
      <SectionContent>
        <div className="tech-stack-scroll-wrapper relative">
          <div className="tech-stack-scroll-window w-full max-w-6xl mx-auto overflow-hidden py-2">
            <div className="shade-left absolute top-0 left-0 z-20 w-60 h-full bg-gradient-to-r from-background via-background to-transparent"></div>
            <div className="shade-right absolute top-0 right-0 z-20 w-60 h-full bg-gradient-to-l from-background via-background to-transparent"></div>
            <div
              className="tech-stack-grid w-full flex flex-row items-center flex-nowrap gap-4 animate-infinite-scroll-h"
              aria-hidden="true"
            >
              {techstackdata &&
                techstackdata.map((tech) => (
                  <div
                    key={tech.name}
                    className="group/logo w-16 sm:w-24 lg:w-28 p-2 hover:opacity-90 hover:-translate-y-1 transition"
                  >
                    <a href={tech.link} target="_blank">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="tech-logo w-full h-full object-cover text-foreground fill-foreground"
                      />
                      <div className="sr-only">{`logo of ${tech.name}`}</div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
}
