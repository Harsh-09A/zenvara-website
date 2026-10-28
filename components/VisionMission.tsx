import { vmg } from "@/lib/data";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Vision, Mission and Goal as three pastel cards
export default function VisionMission() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          center
          title="What drives us"
          text="Our vision, mission and goal guide every piece of advice we give."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {vmg.map((item, index) => (
            <Reveal key={item.title} delay={index * 120} className="h-full">
              <article
                className={`group h-full rounded-3xl ${item.color} p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:scale-110">
                  <item.icon aria-hidden size={26} />
                </span>
                <h3 className="mt-6 font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 text-lg text-navy/85">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
