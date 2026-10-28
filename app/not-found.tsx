import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// The root layout no longer has Header/Footer (they live in the route-group layouts),
// so the 404 page adds them itself.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-44 pb-28">
          <Container>
            <h1 className="font-serif text-4xl md:text-5xl">This page could not be found.</h1>
            <p className="mt-4 max-w-lg">The address may be wrong, or the page may have moved.</p>
            <div className="mt-8">
              <Button href="/">Go to the home page</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
