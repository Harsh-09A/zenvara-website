import { FiCheck, FiMapPin } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { project } from "./data";

// Each section gets an id that matches the header menu (see index.tsx).
// scroll-mt keeps the heading visible below the fixed header.

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-end bg-navy text-ivory">
      <Photo
        name="hero"
        priority
        sizes="100vw"
        className="absolute inset-0"
        overlay="bg-gradient-to-t from-navy/95 via-navy/50 to-navy/35"
      />
      <Container className="relative pt-40 pb-20 md:pb-28">
        <p className="hero-rise mb-6 flex items-center gap-4 text-sm font-medium text-gold">
          <span aria-hidden className="h-px w-10 bg-gold" /> {project.location}
        </p>
        <h1 className="hero-rise-2 max-w-[14ch] font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          {project.name}
        </h1>
        <p className="hero-rise-3 mt-8 max-w-xl text-lg text-ivory/90 md:text-xl">{project.tagline}</p>
      </Container>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading title="Overview" text={project.overview} />
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-navy/70">{fact.label}</dt>
                <dd className="font-serif text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={150}>
          <Photo name="towers" sizes="(min-width: 1024px) 50vw, 100vw" className="h-80 rounded-3xl md:h-[28rem]" />
        </Reveal>
      </Container>
    </section>
  );
}

export function AmenitiesSection() {
  return (
    <section id="amenities" className="scroll-mt-24 bg-beige py-20 md:py-28">
      <Container>
        <SectionHeading title="Amenities" center />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.amenities.map((item, index) => (
            <Reveal key={item} delay={index * 80}>
              <li className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage">
                  <FiCheck aria-hidden />
                </span>
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading title="Location" text={project.location} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.nearby.map((item) => (
            <li key={item.place} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5">
              <FiMapPin aria-hidden className="text-gold" />
              <span>
                {item.place} <strong className="block font-serif text-xl">{item.distance}</strong>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function EnquireSection() {
  return (
    <section id="enquire" className="scroll-mt-24 bg-navy py-20 text-ivory md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2">
        <SectionHeading light title="Enquire now" text={`Share your details and we will call you about ${project.name}.`} />
        <div className="text-navy">
          <ContactForm source={`project:${project.name}`} />
        </div>
      </Container>
    </section>
  );
}
