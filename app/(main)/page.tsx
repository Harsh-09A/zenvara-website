import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiMapPin, FiMessageCircle, FiPercent, FiShield } from "react-icons/fi";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import PriceBars from "@/components/PriceBars";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import VisionMission from "@/components/VisionMission";
import WhyZenvara from "@/components/WhyZenvara";
import { audiences, locations, services } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "Zenvara Ventures | Navi Mumbai Real Estate Investment Guidance" },
};

// Four small highlight cards that overlap the bottom of the hero
const highlights = [
  { icon: FiMapPin, color: "bg-sky", text: `${locations.length} Navi Mumbai areas compared` },
  { icon: FiPercent, color: "bg-sand", text: "Free EMI calculator" },
  { icon: FiShield, color: "bg-sage", text: "RERA and paperwork checklist" },
  { icon: FiMessageCircle, color: "bg-blush", text: "Free first consultation" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Highlights strip */}
      <section className="relative z-10 -mt-14">
        <Container className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.text} delay={index * 100} className="h-full">
              <div className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon aria-hidden size={22} />
                </span>
                <p className="text-sm font-semibold leading-snug">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Who we are */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              title="A partner for one of life's biggest decisions"
              text="Zenvara Ventures helps families and investors choose the right area in Navi Mumbai, know what a fair price looks like, and arrange the loan, with clear advice at every step."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {audiences.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage">
                    <FiCheck aria-hidden size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/about">About us</Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group relative">
              <Photo
                name="towers"
                sizes="(min-width: 1024px) 45vw, 100vw"
                zoom
                className="aspect-[4/5] w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 left-6 max-w-xs rounded-2xl bg-white p-5 shadow-xl">
                <p className="font-serif text-xl">From first call to final paperwork</p>
                <p className="mt-1 text-sm text-navy/70">One team beside you at every step.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            center
            title="How we help you invest"
            text="Everything you need to buy property in Navi Mumbai with confidence."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 120} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/services">View all services</Button>
          </div>
        </Container>
      </section>

      <VisionMission />
      <WhyZenvara />

      {/* Market snapshot */}
      <section className="bg-beige/50 py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Navi Mumbai at a glance"
            text="It is not one market. Prices in Vashi can be three times those in Taloja. Here is how the main areas compare."
          />
          <Reveal className="mt-12">
            <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
              <PriceBars />
            </div>
          </Reveal>
          <Link href="/services#areas" className="link-line mt-8 inline-block font-semibold">
            See the full area guide
          </Link>
        </Container>
      </section>

      <Process />

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <SectionHeading center title="Common questions" />
          <Reveal className="mt-12">
            <Faq />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
