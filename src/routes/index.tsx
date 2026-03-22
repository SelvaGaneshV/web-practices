import { createFileRoute } from "@tanstack/react-router";
import { BuildSection } from "~/components/build-section";
import { ChatIntergrationSection } from "~/components/chat-intergration-section";
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
    <main className="flex flex-col gap-22">
      <Hero />
      <CoustomerBand />
      <PlatformSection />
      <CoreFeatures />
      <BuildSection />
      <ChatIntergrationSection />
      <CtaSection />
    </main>
  );
}
