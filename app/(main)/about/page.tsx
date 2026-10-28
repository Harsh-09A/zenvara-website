import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VisionMission from "@/components/VisionMission";
import WhyZenvara from "@/components/WhyZenvara";
import { audiences, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zenvara Ventures gives clear, honest real estate guidance in Navi Mumbai. Learn about our story, vision, mission and values.",
};

// Soft background colours for the pills, used one after another
const pillColors = ["bg-sage", "bg-sky", "bg-blush", "bg-sand"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="about"
        title="About Zenvara Ventures"
        text="We help families and investors make confident property decisions in Navi Mumbai."
      />

      {/* Our story */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="group">
              <Photo
                name="story"
                sizes="(min-width: 1024px) 45vw, 100vw"
                zoom
                className="aspect-[4/3] w-full rounded-3xl shadow-xl"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <SectionHeading title="Our story" />
            <div className="mt-6 space-y-4 text-lg text-navy/85">
              <p>
                Buying a home or an investment property is one of the biggest
                financial decisions most people make. Yet many buyers decide
                with half the information, or with the loudest voice in the
                room.
              </p>
              <p>
                Zenvara Ventures was started to change that in Navi Mumbai. We
                bring local knowledge, clear numbers and honest advice, so you
                know where to buy, what to pay and how to fund it.
              </p>
            </div>

            <p className="mt-8 font-semibold">Who we work with</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {audiences.map((item, index) => (
                <li
                  key={item}
                  className={`rounded-full px-4 py-2 text-sm ${pillColors[index % pillColors.length]}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <WhyZenvara />

      <VisionMission />

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            center
            title="Our values"
            text="The principles behind how we work with every client."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100} className="h-full">
                <article className="group h-full rounded-2xl bg-ivory p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                    <value.icon aria-hidden size={28} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-2 text-navy/80">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
