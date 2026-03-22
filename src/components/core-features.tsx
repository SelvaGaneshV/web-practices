import { Stars04 } from "~/assets/star-04";
import feature01 from "~/assets/feature-01.png?url";
import { GradientDivider } from "./ui/gradient-divider";
import { FeatureBlock } from "./ui/feature-block";
import { SectionContainer } from "./ui/section-container";
import { introductionBullets, featureBlocks } from "~/utils/constants";
import { HighlightText } from "./ui/highlight-text";

const BulletItem = ({ text }: { text: string }) => (
  <li className="font-medium">
    <div className="flex items-start gap-2">
      <div className="h-5 w-3 md:h-6.5 md:w-4.5">
        <Stars04 className="size-3! md:size-4.5!" />
      </div>
      <span className="text-[14px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[18px] lg:text-[22px]">
        {text}
      </span>
    </div>
  </li>
);

export const CoreFeatures = () => {
  return (
    <section className="content-auto">
      <SectionContainer className="overflow-hidden">
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 z-20 flex flex-col py-4 md:py-6 lg:w-1/2 lg:pt-19">
            <p className="text-[28px] leading-[106%] font-semibold tracking-[0%] sm:text-[32px] md:text-[40px] lg:pb-2 lg:text-[48px] 2xl:text-[56px]">
              Everything you'd end up <HighlightText>already done.</HighlightText>
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 lg:-mt-50 lg:gap-12.5">
            {/* Introduction block */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex w-full flex-col items-start gap-4 lg:w-1/2 lg:pt-52.5">
                <ul className="flex flex-col items-start gap-3 self-stretch">
                  {introductionBullets.map((text) => (
                    <BulletItem key={text} text={text} />
                  ))}
                </ul>
              </div>
              <div className="flex w-full items-center justify-center lg:w-1/2">
                <img
                  src={feature01}
                  alt="Everything you'd end up already done."
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full max-w-64 object-contain sm:max-w-85 md:max-w-100 lg:max-w-full"
                />
              </div>
            </div>

            {/* Feature blocks */}
            {featureBlocks.map((feature) => (
              <div key={feature.tag}>
                <GradientDivider className="mb-10 md:mb-12.5" />
                <FeatureBlock {...feature} />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
