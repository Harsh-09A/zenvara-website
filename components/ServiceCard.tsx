import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import type { Service } from "@/lib/data";

// One service card. Set showPoints to also show the bullet list.
export default function ServiceCard({ service, showPoints = false }: { service: Service; showPoints?: boolean }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Pastel icon box. It turns navy on hover. */}
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color} text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold`}
      >
        <service.icon aria-hidden size={26} />
      </span>

      <h3 className="mt-6 font-serif text-2xl">{service.title}</h3>
      <p className="mt-3 text-navy/80">{service.text}</p>

      {showPoints && (
        <ul className="mt-5 space-y-2 text-sm">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <FiCheck aria-hidden className="shrink-0 text-gold" /> {point}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={service.href}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold"
      >
        Learn more
        <FiArrowRight aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </article>
  );
}
