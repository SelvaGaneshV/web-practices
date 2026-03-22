import { SectionContainer } from "./ui/section-container";
import { HighlightText } from "./ui/highlight-text";
import { platformSectionData } from "~/utils/constants";

export const PlatformSection = () => {
  const { heading, description, image, imageAlt } = platformSectionData;

  return (
    <section className="overflow-x-hidden content-auto">
      <SectionContainer className="relative flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:gap-22 2xl:gap-28">
        {/* text content */}
        <div className="flex-1">
          <div className="flex w-full max-w-132 flex-col items-start text-left 2xl:max-w-160">
            <h2 className="max-w-132 text-[28px] leading-[106%] font-semibold tracking-[0%] sm:text-[32px] md:text-[40px] lg:text-[48px] 2xl:max-w-160 2xl:text-[56px]">
              {heading.map((line) => (
                <span className="w-full" key={line.text + line.highlight}>
                  {line.text} <HighlightText>{line.highlight}</HighlightText>{" "}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-132 text-[14px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[20px] lg:text-[22px] 2xl:max-w-160 2xl:text-[26px]">
              {description}
            </p>
          </div>
        </div>

        <div className="aspect-square max-h-64 w-full flex-1 overflow-hidden sm:max-h-85 md:max-h-120 lg:max-h-160 2xl:max-h-200">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={imageAlt}
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </div>
      </SectionContainer>
    </section>
  );
};
