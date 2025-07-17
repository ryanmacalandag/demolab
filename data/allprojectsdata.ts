
import CostOfLivingCalculator from "@/app/projects/components/CostOfLivingCalculator";
import CreditCardStack from "@/app/projects/components/CreditCardStack";
import InfiniteScroll from "@/app/projects/components/InfiniteScroll";
import PexelsGallery from "@/app/projects/components/PexelsGallery";
import TailwindColorChart from "@/app/projects/components/TailwindColorChart";
import { Calculator, GalleryHorizontalEnd, LayersIcon, LayoutDashboard, LucideIcon, Paintbrush, } from "lucide-react";
import React from "react";

export type CategoryOptionType =  "App Feature" | "Component" | "Feature" | "UI Library" | "API" | "Dev Tools";

export const allcategories: CategoryOptionType[] = [
  "App Feature", "Component", "Feature", "UI Library", "API", "Dev Tools",
]

export type CategoryType = {
  name: CategoryOptionType;
  logo?: string;
  url?: string;
}

export type TechType = {
  name: string;
  description?: string;
  logo?: string;
  url?: string;
}

export type ProjectType = {
  title: string;
  description: string;
  contentfc: React.FC;
  category: CategoryOptionType;
  techstack: string[];
  icon?: LucideIcon;
  featured?: boolean;
  link?: string;
  imgurl?: string;
}

export const allprojectsdata: ProjectType[] = [
  {
    title: "Tailwind Color Chart",
    description: "All color options in Tailwind 4.0.",
    contentfc: TailwindColorChart,
    category: "UI Library",
    techstack: [ "Tailwind" ],
    icon: Paintbrush,
    featured: true,
  },
  {
    title: "Pexels API Photo Gallery ",
    description: "Get images from Pexels and display in a gallery",
    contentfc: PexelsGallery,
    category: "API",
    techstack: [ "Pexels", "Tailwind" ],
    icon: LayoutDashboard,
  },
  {
    title: "Realistic Credit Cards Stacks",
    description: "Playing around with card stacks UI.",
    contentfc: CreditCardStack,
    category: "Component",
    techstack: [ "Tailwind" ],
    icon: LayersIcon,
  },
  {
    title: "Infinite Scroll using Tailwind",
    description: "Infinite scrolls offer a cool way to display images, logos, or test on landing pages.",
    contentfc: InfiniteScroll,
    category: "Component",
    techstack: [ "Tailwind" ],
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Cost of Living Calculator",
    description: "A simple calculator to estimate the cost of living in different cities.",
    contentfc: CostOfLivingCalculator,
    category: "Component",
    techstack: [ "Tailwind" ],
    icon: Calculator,
  },
]