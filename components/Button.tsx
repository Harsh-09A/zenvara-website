import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

type Variant = "navy" | "gold" | "light" | "outline-light";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg";

const variants: Record<Variant, string> = {
  navy: "bg-navy text-ivory hover:bg-gold hover:text-navy",
  gold: "bg-gold text-navy hover:bg-ivory",
  light: "bg-ivory text-navy hover:bg-gold",
  "outline-light": "border border-ivory/60 text-ivory hover:bg-ivory hover:text-navy",
};

// Use this to style a real <button> the same way as the links
export function buttonClasses(variant: Variant = "navy") {
  return `${base} ${variants[variant]}`;
}

export default function Button({
  href,
  children,
  variant = "navy",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link href={href} className={buttonClasses(variant)}>
      {children}
      <FiArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
