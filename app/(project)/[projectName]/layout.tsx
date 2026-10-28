import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/project/ProjectHeader";
import { getProject } from "@/projects";

// Layout for hidden project pages (/<projectName>): same footer, header menu = page sections.
export default async function ProjectLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const project = getProject(projectName);
  if (!project) notFound();

  return (
    <>
      <ProjectHeader sections={project.sections} cta={project.cta} />
      <main id="top" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
