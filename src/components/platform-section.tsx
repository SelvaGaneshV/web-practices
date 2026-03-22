import { SectionContainer } from "./ui/section-container";
import { HighlightText } from "./ui/highlight-text";
import { platformSectionData } from "~/utils/constants";

export const PlatformSection = () => {
  const { heading, description, image, imageAlt } = platformSectionData;

  return (
    <section className="overflow-x-hidden content-auto">
      <SectionContainer className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-22">
        {/* text content */}
        <div className="flex-1">
          <div className="flex w-full max-w-132 flex-col items-start text-left lg:pl-14">
            <h2 className="max-w-132 text-[32px] leading-[106%] font-semibold tracking-[0%] md:text-[48px]">
              {heading.map((line) => (
                <span className="w-full" key={line.text + line.highlight}>
                  {line.text} <HighlightText>{line.highlight}</HighlightText>{" "}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-132 text-[16px] leading-[120%] font-medium tracking-[0.5%] opacity-75 md:text-[22px]">
              {description}
            </p>
          </div>
        </div>

        <div className="aspect-square max-h-85 w-full flex-1 overflow-hidden md:max-h-160">
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
