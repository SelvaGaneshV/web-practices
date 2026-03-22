import { Stars04 } from "~/assets/icons/star-04";
import { type CSSProperties, type FC } from "react";
import { type FeatureBlockData } from "~/utils/types";
import { HighlightText } from "./highlight-text";
import { cn } from "~/utils/utils";

export const BulletItem = ({ text, className, style }: { text: string; className?: string; style?: CSSProperties }) => (
  <li className={cn("font-medium", className)} style={style}>
    <div className="flex items-start gap-2">
      <div className="h-5 w-3 md:h-6.5 md:w-4.5">
        <Stars04 className="size-3! md:size-4.5!" />
      </div>
      <span className="text-[16px] leading-[120%] font-medium tracking-[0.5%] opacity-75 md:text-[18px]">
        {text}
      </span>
    </div>
  </li>
);

export const FeatureBlock: FC<FeatureBlockData> = ({
  tag,
  heading,
  description,
  bullets,
  footnote,
  image,
  imageAlt,
}) => (
  <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-16">
    <div className="flex w-full flex-col items-start gap-4 lg:w-1/2">
      <span className="text-[14px] leading-[106%] font-semibold tracking-[0%] text-accent-primary sm:text-[16px] md:text-[18px] lg:text-[22px]">
        {tag}
      </span>
      <h3 className="flex flex-col text-[26px] leading-[106%] font-semibold tracking-[0%] sm:text-[32px] md:text-[36px]">
        {heading.map((line) => (
          <span key={line.text + line.highlight}>
            {line.text} <HighlightText>{line.highlight}</HighlightText>
          </span>
        ))}
      </h3>
      <p className="text-[14px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[18px]">
        {description}
      </p>

      <ul className="flex flex-col items-start gap-3 self-stretch">
        {bullets.map((text) => (
          <BulletItem key={text} text={text} />
        ))}
      </ul>

      <p className="text-[14px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[18px]">
        {footnote}
      </p>
    </div>
    <div className="flex w-full items-center justify-center lg:w-1/2">
      <img
        src={image}
        alt={imageAlt}
        width={640}
        height={640}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full max-w-64 object-contain sm:max-w-85 md:max-w-100 lg:max-w-full"
      />
    </div>
  </div>
);
