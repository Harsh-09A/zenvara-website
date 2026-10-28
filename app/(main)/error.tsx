"use client";

import { buttonClasses } from "@/components/Button";
import Container from "@/components/Container";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="pt-44 pb-28">
      <Container>
        <h1 className="font-serif text-4xl md:text-5xl">Something went wrong.</h1>
        <p className="mt-4 max-w-lg">Please try again. If the problem continues, contact us.</p>
        <button type="button" onClick={reset} className={`${buttonClasses("navy")} mt-8`}>
          Try again
        </button>
      </Container>
    </section>
  );
}
