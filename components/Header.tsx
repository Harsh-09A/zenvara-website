"use client"; // needed because we use state, scroll events and usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, site } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-[1.65rem] tracking-[0.14em] ${light ? "text-ivory" : "text-navy"}`}>
        ZENVARA
      </span>
      <span className={`mt-1.5 text-[0.625rem] tracking-[0.5em] ${light ? "text-gold" : "text-navy/70"}`}>
        Ventures
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname(); // current page, used to highlight the active link
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Turn the header solid once the page is scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text on the dark hero, dark text on the solid header
  const light = !scrolled || menuOpen;
  const background = menuOpen ? "bg-navy" : scrolled ? "bg-ivory/95 shadow-md backdrop-blur" : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${background}`}>
      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" aria-label={`${site.name}, home`} onClick={() => setMenuOpen(false)}>
          {/* <Wordmark light={light} /> */}
           <Logo onDark={light} />
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navItems
              .filter((item) => item.href !== "/")
              .map((item) => {
                const active = pathname === item.href;
                const isContact = item.href === "/contact";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        isContact
                          ? `rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                              light
                                ? "border-ivory/60 text-ivory hover:bg-ivory hover:text-navy"
                                : "border-navy/40 text-navy hover:bg-navy hover:text-ivory"
                            }`
                          : `link-line text-sm font-medium ${light ? "text-ivory" : "text-navy"}`
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center md:hidden ${light ? "text-ivory" : "text-navy"}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="bg-navy text-ivory md:hidden">
          <Container>
            <ul className="border-t border-ivory/15 pb-8">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-ivory/15">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-5 font-serif text-3xl ${pathname === item.href ? "text-gold" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
