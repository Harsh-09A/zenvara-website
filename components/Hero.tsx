import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import Container from "./Container";
import Photo from "./Photo";

// Full-screen home page hero: photo background, big headline, two buttons.
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end bg-navy text-ivory">
      <Photo
        name="hero"
        priority
        sizes="100vw"
        className="absolute inset-0"
        overlay="bg-gradient-to-t from-navy/95 via-navy/50 to-navy/35"
      />

      {/* Thin vertical lines, like the lines of a building facade */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <Container className="grid h-full grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-l border-ivory/10 last:border-r" />
          ))}
        </Container>
      </div>

      <Container className="relative pt-40 pb-20 md:pb-28">
        <p className="hero-rise mb-8 flex items-center gap-4 text-sm font-medium text-gold">
          <span aria-hidden className="h-px w-10 bg-gold" /> Zenvara Ventures
        </p>

        <h1 className="hero-rise-2 max-w-[14ch] font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          Building Value Beyond Real Estate.
        </h1>

        <div className="hero-rise-3 mt-12 flex flex-col gap-10 border-t border-ivory/25 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-lg text-ivory/90 md:text-xl">
            Zenvara Ventures brings strategic thinking, patient judgment and thoughtful guidance to
            real estate in Navi Mumbai, with a focus on value that endures.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/about" variant="light">
              Discover Zenvara
            </Button>
            <Button href="/contact" variant="outline-light">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Container>

      {/* Little bouncing arrow */}
      <FiChevronDown
        aria-hidden
        size={28}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-ivory/60 md:block"
      />
    </section>
  );
}
