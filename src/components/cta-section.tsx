import { CometChatSquareLogo } from "~/assets/comet-chat-square-logo";
import ellipse from "~/assets/eclipse.png?url";
import { Button } from "./ui/button";
import { SectionContainer } from "./ui/section-container";

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden content-auto">
      <img
        src={ellipse}
        alt=""
        width={1434}
        height={1515}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute top-50 left-1/2 z-5 min-w-378.75 -translate-x-1/2 opacity-80 select-none md:top-40"
      />

      <SectionContainer>
        <div className="relative my-10 flex min-h-187.5 flex-col items-center justify-center overflow-hidden text-center">
          <div
            className="absolute top-35 size-40 rounded-2xl p-0.5 select-none md:top-40"
            style={{
              background: "linear-gradient(to bottom, #6953D6, #0B0A1400)",
            }}
          >
            <div className="flex size-full items-center justify-center rounded-[inherit] bg-bg-primary">
              <CometChatSquareLogo />
            </div>
          </div>

          <div className="absolute top-120 z-10 flex max-w-160 flex-col items-center gap-4 px-4 md:top-120">
            <p className="text-[32px] leading-[106%] font-semibold tracking-[0%] md:text-[48px]">
              You don’t need to build it all to ship it all
            </p>
            <p className="text-center text-[18px] leading-[120%] font-medium tracking-[0.5%] opacity-75 md:text-[22px]">
              Start with chat. Or go full stack. Build fast, scale securely, and focus on what your
              agent does - not what it’s missing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-7.5 text-sm">
              <Button variant="secondary" className="h-11 rounded-xl px-4 text-sm">
                Talk to Us
              </Button>
              <Button className="h-11 rounded-xl px-4 text-sm">Try the Agent Builder</Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
