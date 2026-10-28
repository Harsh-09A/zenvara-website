import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navItems, site } from "@/lib/site";
import Container from "./Container";
import { Wordmark } from "./Header";
import Logo from "./Logo";

const serviceLinks = [
  { label: "Investment guidance", href: "/services" },
  { label: "Location advice", href: "/services#areas" },
  { label: "Home loan help", href: "/services#loans" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <Container className="pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label={`${site.name}, home`}>
              {/* <Wordmark light /> */}
               <Logo />
            </Link>
            <p className="mt-6 max-w-xs text-ivory/80">
              Clear, honest guidance for buying property in Navi Mumbai.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-serif text-lg text-gold">Quick links</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-serif text-lg text-gold">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-lg text-gold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {site.email && (
                <li className="flex items-center gap-3">
                  <FiMail aria-hidden className="text-gold" /> <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {site.phone && (
                <li className="flex items-center gap-3">
                  <FiPhone aria-hidden className="text-gold" /> <a href={`tel:${site.phone}`}>{site.phone}</a>
                </li>
              )}
              <li className="flex items-center gap-3">
                <FiMapPin aria-hidden className="text-gold" /> {site.address}
              </li>
              {site.reraAgentNumber && <li>MahaRERA Agent No: {site.reraAgentNumber}</li>}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-ivory/15 pt-6 text-xs leading-relaxed text-ivory/70">
          Prices, interest rates and charges on this website are indicative and can change. They are
          for general guidance only and are not legal, tax or financial advice. Please verify with
          the lender, MahaRERA and the sub-registrar before you decide.
        </p>
        <p className="mt-4 text-xs text-ivory/70">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
