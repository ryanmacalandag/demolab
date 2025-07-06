import TechStackSection from "@/components/sections/TechStackSection";
import {
  AudioWaveform,
  Blocks,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Heart,
  Map,
  Paintbrush2,
  PieChart,
  Puzzle,
  Settings2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type TeamsDataType = {
  name: string;
  logo: LucideIcon;
  plan: string;
}

export const teamsdata: TeamsDataType[] = [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ]

export type UserDataType = {
  name: string;
    email: string;
    avatar: string;
}

export const userdata: UserDataType = {
  name: "Ryan Macalandag",
    email: "rmacalandag@gmail.com",
    avatar: "/avatars/ryan_avatar.jpg",
}

export type ProjectType = {
  title: string;
  content?: React.FC;
}

export type ProjectDataType = {
  category: string;
  description?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  projects?: ProjectType[];
}

export const projectsdata: ProjectDataType[] = [
  {
    category: "App Features",
    icon: Sparkles,
    isActive: false,
    description: "Sketchbook of features, tools or sections for various web app ideas.",
    projects: [
      {
        title: "App Features",
        content: TechStackSection,
      },
      {
        title: "Blocks",
        content: TechStackSection,
      },
      {
        title: "Sections",
        content: TechStackSection,
      },
      {
        title: "API",
        content: TechStackSection,
      },
    ],
  },
  {
    category: "UI Components",
    icon: Blocks,
    description: "No component is too small or random. I ideate/copy/steal and build on them here.",
    projects: [
      {
        title: "Genesis",
        content: TechStackSection,
      },
      {
        title: "Explorer",
        content: TechStackSection,
      },
      {
        title: "Quantum",
        content: TechStackSection,
      },
    ],
  },
  {
    category: "Design Systems",
    icon: Paintbrush2,
    description: "Exploring the many possibilities of trendy and modern frontend design systems.",
    projects: [
      {
        title: "Tailwind CSS",
        content: TechStackSection,
      },
      {
        title: "Shadcn Theme Maker",
        content: TechStackSection,
      },
      {
        title: "Ignitia DS",
        content: TechStackSection,
      },
    ],
  },
  {
    category: "Core Knowledge",
    icon: BookOpen,
    description: "Writing about difficult topics make mastering them a bit easier.",
    projects: [
      {
        title: "React/JS",
        content: TechStackSection,
      },
      {
        title: "Node",
        content: TechStackSection,
      },
      {
        title: "PHP",
        content: TechStackSection,
      },
    ],
  },
  {
    category: "Collaborations",
    icon: Puzzle,
    description: "Collaborations and networking is a great way to learn things you didn't know you needed.",
    projects: [
      {
        title: "Frontend Essentials",
        content: TechStackSection,
      },
      {
        title: "Fullstack",
        content: TechStackSection,
      },
      {
        title: "Collaborations",
        content: TechStackSection,
      },
    ],
  },
  {
    category: "Roadmap",
    icon: Map,
    description: "This could be real handy in the heat of the hustle.",
    projects: [
      {
        title: "Frontend Essentials",
        content: TechStackSection,
      },
      {
        title: "Fullstack",
        content: TechStackSection,
      },
      {
        title: "Collaborations",
        content: TechStackSection,
      },
    ],
  },
]

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: Heart,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}