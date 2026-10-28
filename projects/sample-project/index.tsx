import type { ProjectDefinition } from "../types";
import Page from "./Page";

// URL of this page: /sample-project  (the slug must be lowercase, with hyphens)
export const sampleProject: ProjectDefinition = {
  slug: "sample-project",
  title: "Sample Project",
  description: "Sample project page.",
  // Header menu. Each id must match a <section id="..."> in sections.tsx
  sections: [
    { id: "overview", label: "Overview" },
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },
  ],
  cta: { label: "Enquire", href: "#enquire" },
  Page,
};
