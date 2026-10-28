import type { images } from "@/lib/images";
import Container from "./Container";
import Photo from "./Photo";

// Banner at the top of inner pages (About, Services, Contact)
export default function PageHero({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: keyof typeof images;
}) {
  return (
    <section className="relative flex min-h-[26rem] items-end bg-navy text-ivory md:min-h-[32rem]">
      <Photo
        name={image}
        priority
        sizes="100vw"
        className="absolute inset-0"
        overlay="bg-gradient-to-t from-navy/95 via-navy/65 to-navy/50"
      />
      <Container className="relative pt-40 pb-14 md:pb-20">
        <span aria-hidden className="hero-rise mb-6 block h-1 w-12 rounded-full bg-gold" />
        <h1 className="hero-rise-2 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="hero-rise-3 mt-5 max-w-2xl text-lg text-ivory/85">{text}</p>
      </Container>
    </section>
  );
}
