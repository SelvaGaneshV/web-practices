import { createFileRoute } from "@tanstack/react-router";
import { BuildSection } from "~/components/build-section";
import { ChatIntegrationSection } from "~/components/chat-integration-section";
import { CoreFeatures } from "~/components/core-features";
import { CtaSection } from "~/components/cta-section";
import { CustomerBand } from "~/components/customer-band";
import { Hero } from "~/components/hero";
import { PlatformSection } from "~/components/platform-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-22">
      <Hero />
      <CustomerBand />
      <PlatformSection />
      <CoreFeatures />
      <BuildSection />
      <ChatIntegrationSection />
      <CtaSection />
    </main>
  );
}
