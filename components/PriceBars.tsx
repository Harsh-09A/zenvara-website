import { locations, type Location } from "@/lib/data";

// Draws one bar per area. The bar starts at the lowest price and ends at the highest price,
// so you can compare areas at a glance. Pure CSS, no chart library.

const SCALE_MAX = 35000; // price at the far right of the track

const barColor: Record<Location["group"], string> = {
  Established: "bg-navy",
  "Mid-range": "bg-gold",
  Growth: "bg-navy/40",
};

// 28000 -> "₹28k", 23500 -> "₹23.5k"
const short = (price: number) => `₹${price / 1000}k`;

export default function PriceBars() {
  const sorted = [...locations].sort((a, b) => b.minPrice - a.minPrice);

  return (
    <div>
      {/* Legend */}
      <ul className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {(Object.keys(barColor) as Location["group"][]).map((group) => (
          <li key={group} className="flex items-center gap-2">
            <span aria-hidden className={`h-3 w-6 rounded-full ${barColor[group]}`} />
            {group}
          </li>
        ))}
      </ul>

      <ul className="space-y-4">
        {sorted.map((place) => (
          <li key={place.name} className="grid items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-white/60 md:grid-cols-[11rem_1fr_13rem] md:gap-4">
            <span className="font-medium">{place.name}</span>

            {/* Track */}
            <div aria-hidden className="relative h-3 rounded-full bg-navy/10">
              <div
                className={`absolute inset-y-0 rounded-full ${barColor[place.group]}`}
                style={{
                  left: `${(place.minPrice / SCALE_MAX) * 100}%`,
                  width: `${((place.maxPrice - place.minPrice) / SCALE_MAX) * 100}%`,
                }}
              />
            </div>

            <span className="text-sm md:text-right">
              {short(place.minPrice)} to {short(place.maxPrice)} per sq ft
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-navy/80">
        Indicative asking prices per sq ft of carpet area. Real prices vary by project and floor.
      </p>
    </div>
  );
}
