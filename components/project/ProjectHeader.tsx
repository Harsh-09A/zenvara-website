"use client"; // scroll events, section highlighting and the mobile menu need the browser

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import type { ProjectDefinition } from "@/projects/types";

// Same look as the main Header, but the menu scrolls to sections of this one page.
export default function ProjectHeader({
  sections,
  cta,
}: Pick<ProjectDefinition, "sections" | "cta">) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the menu item of the section that is in the middle of the screen
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const light = !scrolled || menuOpen;
  const background = menuOpen ? "bg-navy" : scrolled ? "bg-ivory/95 shadow-md backdrop-blur" : "bg-transparent";
  const close = () => setMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${background}`}>
      <Container className="flex h-20 items-center justify-between md:h-24">
        <a href="#top" aria-label="Back to top" onClick={close}>
          <Logo onDark={light} />
        </a>

        {/* Desktop menu */}
        <nav aria-label="Project sections" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={activeId === section.id ? "true" : undefined}
                  className={`link-line text-sm font-medium ${light ? "text-ivory" : "text-navy"}`}
                >
                  {section.label}
                </a>
              </li>
            ))}
            {cta && (
              <li>
                <a
                  href={cta.href}
                  className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    light
                      ? "border-ivory/60 text-ivory hover:bg-ivory hover:text-navy"
                      : "border-navy/40 text-navy hover:bg-navy hover:text-ivory"
                  }`}
                >
                  {cta.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center md:hidden ${light ? "text-ivory" : "text-navy"}`}
          aria-expanded={menuOpen}
          aria-controls="project-mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="project-mobile-menu" aria-label="Project sections, mobile" className="bg-navy text-ivory md:hidden">
          <Container>
            <ul className="border-t border-ivory/15 pb-8">
              {[...sections, ...(cta ? [{ id: "", label: cta.label, href: cta.href }] : [])].map((item) => {
                const href = "href" in item ? item.href : `#${item.id}`;
                return (
                  <li key={href} className="border-b border-ivory/15">
                    <a
                      href={href}
                      onClick={close}
                      className={`block py-5 font-serif text-3xl ${activeId === item.id && item.id ? "text-gold" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
