import Image from "next/image";
import { images } from "@/lib/images";

// A stock photo that fills its box.
//  - Give it a size with className, for example "h-80 w-full" or "absolute inset-0".
//  - overlay: Tailwind classes for the colour layer on top (keeps text readable).
//  - zoom: slowly zooms in on hover. The parent element must have the class "group".
export default function Photo({
  name,
  sizes,
  className = "",
  overlay = "bg-navy/20",
  priority = false,
  zoom = false,
}: {
  name: keyof typeof images;
  sizes: string;
  className?: string;
  overlay?: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  const image = images[name];

  // The box must be positioned for the image to fill it. If the caller passes "absolute",
  // we must not add "relative" too, because the two classes fight and "relative" wins.
  const position = className.includes("absolute") ? "" : "relative";

  return (
    <div className={`${position} overflow-hidden bg-navy ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${zoom ? "transition-transform duration-700 group-hover:scale-105" : ""}`}
      />
      <div aria-hidden className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
