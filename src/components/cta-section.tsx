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
        className="pointer-events-none absolute top-22 left-1/2 z-5 w-full min-w-150 -translate-x-1/2 opacity-80 select-none sm:top-28 sm:min-w-200 md:top-32 md:min-w-250 lg:top-40 lg:min-w-378.75 2xl:min-w-500"
      />

      <SectionContainer>
        <div className="relative my-10 flex min-h-105 flex-col items-center justify-center overflow-hidden text-center sm:min-h-125 md:min-h-150 lg:min-h-187.5 2xl:min-h-280">
          <div className="absolute top-[10%] left-1/2 z-10 -translate-x-1/2 sm:top-[15%]">
            <div
              className="size-20 rounded-xl p-px sm:size-20 md:size-24 lg:size-40 2xl:size-52"
              style={{
                background: "linear-gradient(to bottom, #6953D6, #0B0A1400)",
              }}
            >
              <div className="flex size-full items-center justify-center rounded-[inherit] bg-bg-primary p-4 sm:p-4 md:p-5 lg:p-6 2xl:p-8">
                <CometChatSquareLogo className="h-full w-full" />
              </div>
            </div>
          </div>

          <div className="absolute top-60 z-10 flex max-w-72 flex-col items-center gap-2 px-2 sm:top-72 sm:max-w-sm sm:gap-3 sm:px-4 md:top-90 md:max-w-lg md:gap-4 lg:top-120 lg:max-w-160 2xl:top-160 2xl:max-w-260 2xl:gap-6">
            <p className="text-[20px] leading-[106%] font-semibold tracking-[0%] sm:text-[24px] md:text-[32px] lg:text-[48px] 2xl:text-[64px]">
              You don’t need to build it all to ship it all
            </p>
            <p className="text-center text-[12px] leading-[130%] font-medium tracking-[0.5%] opacity-75 sm:text-[14px] md:text-[16px] lg:text-[22px] 2xl:text-[28px]">
              Start with chat. Or go full stack. Build fast, scale securely, and focus on what your
              agent does - not what it’s missing.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2 text-sm sm:pt-4 md:pt-5 lg:pt-7.5 2xl:gap-6 2xl:pt-10">
              <Button
                variant="secondary"
                className="h-9 rounded-xl px-3 text-xs sm:h-10 sm:text-sm md:h-11 md:px-4 2xl:h-14 2xl:px-8 2xl:text-lg"
              >
                Talk to Us
              </Button>
              <Button className="h-9 rounded-xl px-3 text-xs sm:h-10 sm:text-sm md:h-11 md:px-4 2xl:h-14 2xl:px-8 2xl:text-lg">
                Try the Agent Builder
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
