import { Stars04 } from "~/assets/star-04";
import feature01 from "~/assets/feature-01.png?url";
import { GradientDivider } from "./ui/gradient-divider";
import { FeatureBlock } from "./ui/feature-block";
import { introductionBullets, featureBlocks } from "~/utils/constants";
import { HighlightText } from "./ui/highlight-text";

const BulletItem = ({ text }: { text: string }) => (
  <li className="font-medium">
    <div className="flex items-start gap-2">
      <Stars04 />
      <span className="text-lg leading-snug font-medium tracking-[0.09px] opacity-75">{text}</span>
    </div>
  </li>
);

export const CoreFeatures = () => {
  return (
    <section className="content-auto bg-bg-primary text-primary">
      <div className="container mx-auto flex flex-col items-start gap-8 px-5 md:px-8 lg:flex-row lg:items-center lg:gap-22 lg:px-10 xl:px-20">
        <div className="relative lg:pl-10">
          {/* Header */}
          <div className="sticky top-0 z-20 flex flex-col pt-6 pb-6 lg:w-147 lg:pt-19">
            <p className="pb-2 text-[48px] leading-[106%] font-semibold tracking-[0%]">
              Everything you'd end up <HighlightText>already done.</HighlightText>
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:-mt-50 lg:gap-12.5">
            {/* Introduction block */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex w-full flex-col items-start gap-4 lg:w-147 lg:pt-52.5">
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
                  className="aspect-square h-auto w-full object-contain lg:h-160 lg:w-160"
                />
              </div>
            </div>

            {/* Feature blocks */}
            {featureBlocks.map((feature) => (
              <div key={feature.tag}>
                <GradientDivider className="mb-10 lg:mb-12.5" />
                <FeatureBlock {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
