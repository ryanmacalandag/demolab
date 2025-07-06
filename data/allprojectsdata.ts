
import CreditCardStack from "@/app/project/components/CreditCardStack";
import InfiniteScroll from "@/app/project/components/InfiniteScroll";
import PexelsGallery from "@/app/project/components/PexelsGallery";
import TailwindColorChart from "@/app/project/components/TailwindColorChart";
import { CreditCard, GalleryHorizontalEnd, LayersIcon, LayoutDashboard, LucideIcon, Paintbrush, } from "lucide-react";
import React from "react";

export type CategoryOptionType =  "App Idea" | "UI Component" | "Feature" | "Design System" | "API" | "Dev Tools";

export const allcategories: CategoryOptionType[] = [
  "App Idea", "UI Component", "Feature", "Design System", "API", "Dev Tools",
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
  category: CategoryOptionType[];
  techstack: string[];
  icon?: LucideIcon;
}

export const allprojectsdata: ProjectType[] = [
  {
    title: "Tailwind Color Chart",
    description: "All color options in Tailwind 4.0.",
    contentfc: TailwindColorChart,
    category: [ "Design System" ],
    techstack: [ "Tailwind" ],
    icon: Paintbrush,
  },
  {
    title: "Pexels API Photo Gallery ",
    description: "Get images from Pexels and display in a gallery",
    contentfc: PexelsGallery,
    category: [ "API", "UI Component" ],
    techstack: [ "Pexels", "Tailwind" ],
    icon: LayoutDashboard,
  },
  {
    title: "Realistic Credit Cards Stacks",
    description: "Playing around with card stacks UI.",
    contentfc: CreditCardStack,
    category: [ "UI Component" ],
    techstack: [ "Tailwind" ],
    icon: LayersIcon,
  },
  {
    title: "Infinite Scroll using Tailwind",
    description: "Infinite scrolls offer a cool way to display images, logos, or test on landing pages.",
    contentfc: InfiniteScroll,
    category: [ "UI Component" ],
    techstack: [ "Tailwind" ],
    icon: GalleryHorizontalEnd,
  },
]