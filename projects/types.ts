import type { ComponentType } from "react";

// One entry in the project header menu. `id` must match the id of a <section> on the page.
export type ProjectSection = { id: string; label: string };

export type ProjectDefinition = {
  slug: string; // the URL: zenvara.in/<slug>
  title: string; // browser tab title
  description: string; // meta description
  sections: ProjectSection[]; // header menu items (scroll to section)
  cta?: { label: string; href: string }; // highlighted button on the right of the header
  Page: ComponentType; // the whole single page; each project can look totally different
};
