import { processSteps } from "@/lib/data";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Five steps in a row (this really is a sequence, so numbers make sense)
export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading center title="How it works" text="From your first call to a confident decision." />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 100} className="h-full">
                <div className="group h-full rounded-2xl bg-ivory p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-serif text-xl text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy/80">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
