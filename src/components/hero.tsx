import { Stars01 } from "~/assets/stars-01";
import { Button } from "./ui/button";
import { HighlightText } from "./ui/highlight-text";
import { SectionContainer } from "./ui/section-container";
import { heroData } from "~/utils/constants";
import { cn } from "~/utils/utils";

export const Hero = () => {
  const { badge, headlines, descriptions, ctas, image, imageAlt } = heroData;

  return (
    <section className="relative isolate flex flex-col items-center justify-center gap-28">
      <SectionContainer className="py-10 md:py-14 ">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="flex w-full max-w-132 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex size-8 items-center justify-center rounded-full bg-linear-to-b from-white to-accent-secondary backdrop-blur-lg md:size-10">
                    <Stars01 className="size-5 md:size-6" />
                  </div>
                  <div className="flex items-center rounded-full bg-linear-to-b from-white to-accent-primary p-0.5">
                    <div className="flex h-full items-center rounded-full bg-bg-primary px-3 md:px-4">
                      <p className="bg-linear-to-b from-white to-accent-primary bg-clip-text text-base font-semibold text-transparent md:text-lg">
                        {badge}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-2.5">
                  {headlines.map((line) => (
                    <p
                      key={line.text}
                      className="text-[40px] leading-[106%] tracking-[0%] md:text-5xl md:text-[58px]"
                    >
                      {line.text} <HighlightText className="pb-1">{line.highlight}</HighlightText>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 text-[16px] leading-[120%] tracking-[0.5%] opacity-75 md:text-[22px]">
                {descriptions.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  variant={cta.variant}
                  className={cn(
                    "h-11 md:w-43.25 w-37.25 px-4 py-3 text-sm",
                    cta.label === "Try the Agent Builder" && "w-43.25",
                  )}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          <img
            src={image}
            alt={imageAlt}
            width={576}
            height={576}
            fetchPriority="high"
            className="w-full max-w-87.5 object-contain md:max-w-xl"
          />
        </div>
      </SectionContainer>
    </section>
  );
};
