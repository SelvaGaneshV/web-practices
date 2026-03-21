import { createFileRoute } from "@tanstack/react-router";
import { CoreFeatures } from "~/components/core-features";
import { CtaSection } from "~/components/cta-section";
import { CoustomerBand } from "~/components/customer-band";
import { Hero } from "~/components/hero";
import { PlatformSection } from "~/components/platform-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <CoustomerBand />
      <PlatformSection />
      <CoreFeatures />
      <CtaSection />
    </>
  );
}
