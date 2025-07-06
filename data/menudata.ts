import { BookOpen, LucideIcon, Map, Paintbrush, Puzzle, Sparkles } from "lucide-react";

export type SecondaryMenuType = {
  name: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

export type PrimaryMenuType = {
  name: string;
  icon?: LucideIcon;
  isActive?: boolean;
  submenuitems?: SecondaryMenuType[];
}

export const primarymenulist: PrimaryMenuType[] = [
  {
    name: "Projects",
    icon: Sparkles,
    isActive: false,
  },
  {
    name: "Design Systems",
    icon: Paintbrush,
    submenuitems: [
      {
        name: "Tailwind CSS",
        url: "#"
      },
      {
        name: "Shadcn Theme Maker",
        url: "#"
      },
      {
        name: "Ignitia DS",
        url: "#"
      },
    ],
  },
  {
    name: "Core Knowledge",
    icon: BookOpen,
    submenuitems: [
      {
        name: "Javascript",
        url: "#"
      },
      {
        name: "React JS",
        url: "#"
      },
      {
        name: "Node",
        url: "#"
      },
      {
        name: "PHP",
        url: "#"
      },
    ],
  },
  {
    name: "Collaborations",
    icon: Puzzle,
  },
  {
    name: "Roadmap",
    icon: Map,
    submenuitems: [
      {
        name: "Frontend Essentials",
        url: "#"
      },
      {
        name: "Fullstack",
        url: "#"
      },
      {
        name: "Collaborations",
        url: "#"
      },
    ],
  },
]