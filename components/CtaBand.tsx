import Button from "./Button";
import Container from "./Container";
import Photo from "./Photo";
import Reveal from "./Reveal";

// Call-to-action banner shown at the bottom of every page
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center text-ivory md:py-28">
      <Photo name="night" sizes="100vw" className="absolute inset-0" overlay="bg-navy/85" />
      <Container className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
            Ready to invest in Navi Mumbai with confidence?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ivory/80">
            Tell us your budget and goal. We will suggest areas, a price range and a loan plan.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="gold">
              Book a free consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
