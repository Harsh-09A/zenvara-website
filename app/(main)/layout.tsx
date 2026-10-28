import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Layout for the normal website pages: /, /about, /services, /contact
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
