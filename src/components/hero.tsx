import { Stars01 } from "~/assets/stars-01";
import { Button } from "./ui/button";
import { HighlightText } from "./ui/highlight-text";
import { SectionContainer } from "./ui/section-container";
import { heroData } from "~/utils/constants";

export const Hero = () => {
  const { badge, headlines, descriptions, ctas, image, imageAlt } = heroData;

  return (
    <section className="relative isolate flex flex-col items-center justify-center gap-28">
      <SectionContainer className="py-10 md:py-14 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="flex w-full max-w-132 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-b from-white to-accent-secondary backdrop-blur-lg">
                    <Stars01 />
                  </div>
                  <div className="flex items-center rounded-full bg-linear-to-b from-white to-accent-primary p-0.5">
                    <div className="flex h-full items-center rounded-full bg-bg-primary px-4">
                      <p className="bg-linear-to-b from-white to-accent-primary bg-clip-text text-transparent">
                        {badge}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  {headlines.map((line) => (
                    <div
                      key={line.text}
                      className="flex gap-2.5 text-3xl md:text-5xl lg:text-[58px] leading-[106%] tracking-[0%]"
                    >
                      {line.text}
                      <HighlightText className="pb-1">
                        {line.highlight}
                      </HighlightText>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 text-[22px] leading-[120%] tracking-[0.5%] opacity-75">
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
                  className="h-11 w-43.25 px-4 py-3 text-sm"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          <img src={image} alt={imageAlt} className="w-full max-w-xl object-contain" />
        </div>
      </SectionContainer>
    </section>
  );
};
