import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projectSlugs } from "@/projects";

type Props = { params: Promise<{ projectName: string }> };

// Only the slugs registered in /projects exist. Anything else (/random) shows the normal 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((projectName) => ({ projectName }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params;
  const project = getProject(projectName);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    // Hidden page: keep it out of Google. (It is also not in sitemap.xml.)
    robots: { index: false, follow: false },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectName } = await params;
  const project = getProject(projectName);
  if (!project) notFound();

  const { Page } = project;
  return <Page />;
}
