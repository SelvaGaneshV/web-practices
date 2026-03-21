import { customerLogo } from "~/utils/constants";
import { SectionContainer } from "./ui/section-container";
import { BorderedCard } from "./ui/bordered-card";

export const CoustomerBand = () => {
  const logos = [...customerLogo, ...customerLogo, ...customerLogo];

  return (
    <section className="relative isolate z-20 overflow-visible">
      <SectionContainer>
        <div className="h-34">
          <BorderedCard>
            <div className="relative flex h-full max-w-275 items-center justify-center overflow-hidden">
              <div
                className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32"
                style={{ background: "linear-gradient(to right, #0a0914, transparent)" }}
              />

              <div
                className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32"
                style={{ background: "linear-gradient(to left, #0a0914, transparent)" }}
              />

              <div
                className="flex w-max items-center gap-8"
                style={{ animation: "marquee 20s linear infinite", willChange: "transform" }}
              >
                {logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt=""
                    width={120}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-10 object-contain px-3 grayscale"
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
