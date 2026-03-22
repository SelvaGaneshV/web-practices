import { customerLogos } from "~/utils/constants";
import { SectionContainer } from "./ui/section-container";
import { BorderedCard } from "./ui/bordered-card";
import { Button } from "./ui/button";

export const CustomerBand = () => {
  const logos = [
    ...customerLogos,
    ...customerLogos,
    ...customerLogos,
    ...customerLogos,
    ...customerLogos,
  ];

  return (
    <section
      className="relative isolate z-20 overflow-visible"
      aria-label="Trusted by leading companies"
    >
      <SectionContainer>
        <div className="h-20 sm:h-24 md:h-28 2xl:h-30">
          <BorderedCard lineWidth={"w-[calc(100%+10%)]"}>
            <div className="group relative flex h-full w-full items-center justify-center overflow-hidden px-4 sm:px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-28">
              <div
                className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 sm:w-32"
                style={{ background: "linear-gradient(to right, #0a0914, transparent)" }}
              />

              <div
                className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 sm:w-32"
                style={{ background: "linear-gradient(to left, #0a0914, transparent)" }}
              />

              <div className="absolute z-10 flex h-6 w-full items-center justify-center gap-6 opacity-0 backdrop-blur-xs group-hover:opacity-100 sm:h-8 sm:gap-8 md:h-10 2xl:h-14 2xl:gap-12">
                <Button variant={"secondary"} className="h-10 bg-transparent">
                  Check out our amazing customer stories
                </Button>
              </div>

              <div
                className="flex h-6 w-max items-center gap-6 sm:h-8 sm:gap-8 md:h-10 2xl:h-14 2xl:gap-12"
                style={{ animation: "marquee 20s linear infinite", willChange: "transform" }}
              >
                {logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={120}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-full object-contain px-3 grayscale"
                  />
                ))}
              </div>
            </div>
          </BorderedCard>
        </div>
      </SectionContainer>
    </section>
  );
};
