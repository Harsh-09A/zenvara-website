import type { Metadata } from "next";
import { FiFileText, FiUser } from "react-icons/fi";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import EmiCalculator from "@/components/EmiCalculator";
import PageHero from "@/components/PageHero";
import PriceBars from "@/components/PriceBars";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  businessDocs,
  loanFactors,
  locations,
  salariedDocs,
  services,
  TWO_BHK_CARPET_SQFT,
  type Location,
} from "@/lib/data";
import { formatLakhCrore } from "@/lib/emi";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Investment guidance, Navi Mumbai area and price comparison, home loan help and paperwork checklists from Zenvara Ventures.",
};

// Badge colour for each group of areas
const groupColor: Record<Location["group"], string> = {
  Established: "bg-sky",
  "Mid-range": "bg-sand",
  Growth: "bg-sage",
};

const loanCardColors = ["bg-sky", "bg-sage", "bg-blush", "bg-sand"];

function DocList({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof FiUser }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender">
          <Icon aria-hidden size={20} />
        </span>
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <FiFileText aria-hidden className="mt-1 shrink-0 text-gold" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="services"
        title="Our services"
        text="Guidance on where to invest, what to pay and how to fund it. All in one place."
      />

      {/* All services */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title="What we do for you" text="Pick one service or let us guide you through all of them." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 120} className="h-full">
                <ServiceCard service={service} showPoints />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas and prices */}
      <section id="areas" className="bg-beige/50 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Navi Mumbai areas and prices"
            text="Every node behaves like a different market. Compare prices, who each area suits and what to watch out for."
          />

          <Reveal className="mt-12">
            <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
              <PriceBars />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((place, index) => (
              <Reveal key={place.name} delay={(index % 3) * 100} className="h-full">
                <article className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl">{place.name}</h3>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${groupColor[place.group]}`}>
                      {place.group}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">
                    ₹{place.minPrice.toLocaleString("en-IN")} to ₹{place.maxPrice.toLocaleString("en-IN")} per sq ft
                  </p>
                  <p className="text-sm text-navy/70">
                    A 2 BHK is about {formatLakhCrore(place.minPrice * TWO_BHK_CARPET_SQFT)} to{" "}
                    {formatLakhCrore(place.maxPrice * TWO_BHK_CARPET_SQFT)}
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold">Best for</dt>
                      <dd>{place.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Watch out</dt>
                      <dd>{place.watchOut}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-navy/70">
            Prices are indicative asking rates per sq ft of carpet area from property portals and market
            reports. Your actual price depends on the project, floor and view. Contact us for the latest
            range.
          </p>
        </Container>
      </section>

      {/* Home loan */}
      <section id="loans" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Home loan help"
            text="Know what you can borrow and what the EMI will be, before you talk to a bank."
          />
          <Reveal className="mt-12">
            <EmiCalculator />
          </Reveal>
          <p className="mt-4 max-w-3xl text-sm text-navy/70">
            Home loan rates in 2026 start from roughly 7 to 8.5% for borrowers with a good credit
            profile and go higher for others. Ask your lender for your exact rate.
          </p>

          <h3 className="mt-16 font-serif text-3xl">What banks look at</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loanFactors.map((factor, index) => (
              <Reveal key={factor.title} delay={index * 100} className="h-full">
                <div
                  className={`h-full rounded-2xl ${loanCardColors[index]} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                >
                  <h4 className="font-serif text-xl">{factor.title}</h4>
                  <p className="mt-2 text-sm text-navy/85">{factor.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-16 font-serif text-3xl">Documents to keep ready</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <DocList title="If you are salaried" items={salariedDocs} icon={FiUser} />
            <DocList title="If you run a business" items={businessDocs} icon={FiFileText} />
          </div>
        </Container>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
