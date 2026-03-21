import { Button } from "./ui/button";
import { SectionContainer } from "./ui/section-container";
import { CometChatBgLogo } from "~/assets/comet-chat-bg-logo";
import ellipse from "~/assets/eclipse.png?url";

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ellipse}
        alt=""
        className="pointer-events-none absolute top-50 left-1/2 min-w-250 -translate-x-1/2 opacity-80 select-none lg:top-40"
      />

      <SectionContainer>
        <div className="relative my-10 flex min-h-167.5 flex-col items-center justify-center overflow-hidden text-center">
          <div className="absolute top-10 -translate-x-10 opacity-20 select-none">
            <CometChatBgLogo />
          </div>

          <div className="absolute top-80 z-10 flex max-w-160 flex-col items-center gap-4 px-4">
            <p className="text-3xl leading-tight font-semibold">
              Chat that ships. <br />
              Agents that scale.
              <br />
              No glue code required.
            </p>
            <p className="text-center text-xl leading-snug font-medium tracking-[0.11px] opacity-75">
              CometChat handles the messy middle - UI, safety, infra, notifications - so you can
              build with clarity, confidence, and joy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-7.5 text-sm">
              <Button variant="secondary" className="h-11 rounded-xl px-4 text-sm">
                Talk to Us
              </Button>
              <Button className="h-11 rounded-xl px-4 text-sm">Get Started for Free</Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
