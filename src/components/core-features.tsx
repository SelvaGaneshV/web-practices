import { Stars04 } from "~/assets/star-04";
import feature01 from "~/assets/feature-01.png?url";
import { GradientDivider } from "./ui/gradient-divider";
import { FeatureBlock } from "./ui/feature-block";
import { introductionBullets, featureBlocks } from "~/utils/constants";
import { HighlightText } from "./ui/highlight-text";

const BulletItem = ({ text }: { text: string }) => (
  <li className="font-medium">
    <div className="flex items-start gap-2">
      <div className="h-5 w-3 md:h-6.5 md:w-4.5">
        <Stars04 className="size-3! md:size-4.5!" />
      </div>
      <span className="text-[16px] leading-[120%] font-medium tracking-[0.5%] opacity-75 md:text-[22px]">
        {text}
      </span>
    </div>
  </li>
);

export const CoreFeatures = () => {
  return (
    <section className="content-auto">
      <div className="container mx-auto flex flex-col items-start gap-8 px-5 md:flex-row md:items-center md:gap-22 md:px-8 xl:px-20">
        <div className="relative md:pl-10">
          {/* Header */}
          <div className="sticky top-0 z-20 flex flex-col py-4 md:w-147 md:py-6 md:pt-19">
            <p className="text-[32px] leading-[106%] font-semibold tracking-[0%] md:pb-2 md:text-[48px]">
              Everything you'd end up <HighlightText>already done.</HighlightText>
            </p>
          </div>

          <div className="flex flex-col gap-10 md:-mt-50 md:gap-12.5">
            {/* Introduction block */}
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
              <div className="flex w-full flex-col items-start gap-4 md:w-147 md:pt-52.5">
                <ul className="flex flex-col items-start gap-3 self-stretch">
                  {introductionBullets.map((text) => (
                    <BulletItem key={text} text={text} />
                  ))}
                </ul>
              </div>
              <div className="flex w-full items-center justify-center md:w-1/2">
                <img
                  src={feature01}
                  alt="Everything you'd end up already done."
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-85 w-85 object-contain md:h-160 md:w-160"
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
      </div>
    </section>
  );
};
