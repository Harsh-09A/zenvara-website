import { AmenitiesSection, EnquireSection, HeroSection, LocationSection, OverviewSection } from "./sections";

// The whole page. Reorder, remove or add sections here, nothing else on the website is affected.
export default function SampleProjectPage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <AmenitiesSection />
      <LocationSection />
      <EnquireSection />
    </>
  );
}
