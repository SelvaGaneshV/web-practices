import { Stars01 } from "~/assets/icons/star-01";
import { Button } from "./ui/button";
import { HighlightText } from "./ui/highlight-text";
import { SectionContainer } from "./ui/section-container";
import { heroData } from "~/utils/constants";

export const Hero = () => {
  const { badge, headlines, descriptions, ctas, image, imageAlt } = heroData;

  return (
    <section className="relative isolate flex flex-col items-center justify-center gap-28">
      <SectionContainer className="py-10 md:py-14">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 2xl:gap-16">
          <div className="flex w-full max-w-132 flex-col gap-8 2xl:max-w-160">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex size-8 items-center justify-center rounded-full bg-linear-to-b from-white to-accent-secondary sm:size-9 md:size-10">
                    <Stars01 className="size-5 sm:size-5.5 md:size-6" />
                  </div>
                  <div className="flex items-center rounded-full bg-linear-to-b from-white to-accent-primary p-0.5">
                    <div className="flex h-full items-center rounded-full bg-bg-primary px-3 md:px-4">
                      <p className="bg-linear-to-b from-white to-accent-primary bg-clip-text text-base font-semibold text-transparent md:text-lg">
                        {badge}
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="flex flex-col gap-1 sm:gap-2 md:gap-2.5">
                  {headlines.map((line) => (
                    <span
                      key={line.text}
                      className="block text-[32px] leading-[106%] tracking-[0%] sm:text-[40px] md:text-[48px] lg:text-[58px] 2xl:text-[68px]"
                    >
                      {line.text} <HighlightText className="pb-1">{line.highlight}</HighlightText>
                    </span>
                  ))}
                </h1>
              </div>
              <div className="flex flex-col gap-3 text-[14px] leading-[120%] tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[20px] lg:text-[22px] 2xl:text-[26px]">
                {descriptions.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  variant={cta.variant}
                  className="h-10 w-auto px-4 py-2.5 text-[14px] leading-[140%] tracking-[2%] sm:h-11  sm:py-3 md:w-43.25"
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
            className="w-full max-w-72 object-contain sm:max-w-87.5 md:max-w-md lg:max-w-xl 2xl:max-w-2xl"
          />
        </div>
      </SectionContainer>
    </section>
  );
};
