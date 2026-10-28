// Company details in one place. Change values here and the whole site updates.

export const site = {
  name: "Zenvara Ventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Zenvara Ventures guides you on real estate investment in Navi Mumbai: which area to buy in, what to pay, and how to arrange your home loan.",

  // Logo files live in /public/images. Replace these two files with your own logo,
  // or change the paths here (for example "/images/logo.png").
  logoOnDark: "/images/logo/zenvara-logo.png", // used on dark backgrounds (hero, footer)
  logoOnLight: "/images/logo/zenvara-logo.png", // used on light backgrounds (scrolled header)

  // TODO: add real details. Empty values are hidden automatically.
  email: "info@zenvara.in",
  phone: "+91 00000 00000",
  address: "Navi Mumbai, Maharashtra",
  reraAgentNumber: "", // MahaRERA agent registration number
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
