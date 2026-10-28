import type { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with Zenvara Ventures for Navi Mumbai real estate investment guidance.",
};

export default function ContactPage() {
  // Only show a card when the detail has been filled in lib/site.ts
  const details = [
    { icon: FiPhone, label: "Call us", value: site.phone, href: `tel:${site.phone}`, color: "bg-sage" },
    { icon: FiMail, label: "Email us", value: site.email, href: `mailto:${site.email}`, color: "bg-sky" },
    { icon: FiMapPin, label: "Visit us", value: site.address, href: "", color: "bg-blush" },
  ].filter((item) => item.value);

  return (
    <>
      <PageHero
        image="contact"
        title="Let us begin with a conversation"
        text="Share a few details and we will call you. No pressure, no obligation."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-5">
          {/* Left: details and next steps */}
          <div className="space-y-6 lg:col-span-2">
            {details.map((item) => (
              <Reveal key={item.label}>
                <div className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.color} transition-colors duration-300 group-hover:bg-navy group-hover:text-gold`}
                  >
                    <item.icon aria-hidden size={24} />
                  </span>
                  <div>
                    <p className="text-sm text-navy/70">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={150}>
              <div className="rounded-2xl bg-sand p-7">
                <h2 className="font-serif text-2xl">What happens next</h2>
                <ol className="mt-4 list-decimal space-y-3 pl-5">
                  <li>We call you to understand your budget and goal.</li>
                  <li>We share 2 or 3 suitable areas with price ranges.</li>
                  <li>We guide you on the loan and the checks before you buy.</li>
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={100} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
