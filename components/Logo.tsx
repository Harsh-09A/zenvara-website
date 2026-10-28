import Image from "next/image";
import { site } from "@/lib/site";

// Shows the company logo image.
// onDark = true  -> use the logo made for dark backgrounds
// onDark = false -> use the logo made for light backgrounds
// If you have only one logo file, put the same path in both places in lib/site.ts.
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Image
      src={onDark ? site.logoOnDark : site.logoOnLight}
      alt={site.name}
      width={220}
      height={64}
      priority
      unoptimized // logos are small, so no need for Next.js image optimisation (also allows SVG)
      className="h-22 w-auto md:h-22"
    />
  );
}
