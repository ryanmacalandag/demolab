import ContentCardGrid from "../main/ContentCardGrid";
import ContentCard from "../main/ContentCard";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SectionHeader from "./SectionHeader";
import { ProjectType } from "@/data/allprojectsdata";
import { Blocks } from "lucide-react";
import Link from "next/link";
import { Slugify } from "@/util/Slugify";

export function BrowseProjects({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="section-browse-projects">
      <SectionHeader>
        <h3 className="section-title text-lg font-semibold py-6">
          Browse All Projects
        </h3>
      </SectionHeader>
      <ContentCardGrid>
        {projects.map((project) => (
          <ContentCard key={project.title} className="group/card">
            <CardHeader>
              {(project.icon && <project.icon />) || <Blocks />}
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <CardAction>
                <Link href={`/project/${Slugify(project.title)}`}>
                  <Button
                    variant="default"
                    className="dark-group-hover/card:text-foreground group-hover/card:bg-primary group-hover/card:-translate-y-1 dark-group-hover/card:border-t dark-group-hover/card:border-foreground/70 flex gap-1 has-[>svg]:pr-4 rounded bg-foreground uppercase text-xs text-background group-hover:text-pink-50 justify-self-end"
                  >
                    <MagnifyingGlassIcon className="" />
                    View Project
                  </Button>
                </Link>
              </CardAction>
            </CardFooter>
          </ContentCard>
        ))}
      </ContentCardGrid>
    </div>
  );
}
