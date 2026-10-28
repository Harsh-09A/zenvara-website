import { whyZenvara } from "@/lib/data";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// "Why Zenvara": four cards on a navy background
export default function WhyZenvara() {
  return (
    <section className="bg-navy py-20 text-ivory md:py-28">
      <Container>
        <SectionHeading
          center
          light
          title="Why choose Zenvara"
          text="Property is a big decision. Here is what you can expect from us."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyZenvara.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <article className="group h-full rounded-2xl bg-white/5 p-7 ring-1 ring-ivory/15 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:ring-gold/60">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <item.icon aria-hidden size={26} />
                </span>
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-ivory/80">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
