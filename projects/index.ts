import type { ProjectDefinition } from "./types";
import { sampleProject } from "./sample-project";

// Every hidden project page is registered here.
// To add a new project: create projects/<slug>/index.tsx and add it to this list.
const all: ProjectDefinition[] = [sampleProject];

// These URLs already belong to the main website, so a project cannot use them.
const reserved = ["about", "services", "contact", "api", "sitemap.xml", "robots.txt"];
for (const project of all) {
  if (reserved.includes(project.slug)) {
    throw new Error(`Project slug "${project.slug}" is reserved by the main website.`);
  }
}

export const projectSlugs = all.map((project) => project.slug);

export function getProject(slug: string): ProjectDefinition | undefined {
  return all.find((project) => project.slug === slug);
}
