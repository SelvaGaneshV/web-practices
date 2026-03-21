import { SectionContainer } from "./ui/section-container";
import { HighlightText } from "./ui/highlight-text";
import { platformSectionData } from "~/utils/constants";

export const PlatformSection = () => {
  const { heading, description, image, imageAlt } = platformSectionData;

  return (
    <section className="overflow-x-hidden  pt-12 pb-10  content-auto md:py-16">
      <SectionContainer className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-22">
        {/* text content */}
        <div className="flex-1">
          <div className="flex w-full max-w-132 flex-col items-start text-left lg:pl-14">
            <h2 className="max-w-132 text-[48px] leading-[106%] font-semibold tracking-[0%]">
              {heading.map((line) => (
                <span className="w-full" key={line.text + line.highlight}>
                  {line.text} <HighlightText>{line.highlight}</HighlightText>{" "}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-132 text-xl leading-snug font-medium tracking-wide opacity-75">
              {description}
            </p>
          </div>
        </div>

        <div className="aspect-square h-full w-full flex-1 overflow-hidden lg:max-h-160">
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
