import { Stars04 } from "~/assets/star-04";
import { type FC } from "react";
import { type FeatureBlockData } from "~/utils/types";
import { HighlightText } from "./highlight-text";

const BulletItem = ({ text }: { text: string }) => (
  <li className="font-medium">
    <div className="flex items-start gap-2">
      <Stars04 />
      <span className="text-lg leading-snug font-medium tracking-[0.09px] opacity-75">{text}</span>
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
  <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
    <div className="flex w-full flex-col items-start gap-4 lg:w-147">
      <h3 className="text-xl leading-tight font-semibold text-accent-primary">{tag}</h3>
      <div className="flex flex-col text-2xl leading-snug font-semibold tracking-[0.09px] lg:w-129.5">
        {heading.map((line) => (
          <p key={line.text + line.highlight}>
            {line.text} <HighlightText>{line.highlight}</HighlightText>
          </p>
        ))}
      </div>
      <p className="text-lg leading-snug font-medium tracking-[0.09px] opacity-75">{description}</p>

      <ul className="flex flex-col items-start gap-3 self-stretch">
        {bullets.map((text) => (
          <BulletItem key={text} text={text} />
        ))}
      </ul>

      <p className="text-md leading-snug font-semibold tracking-widest opacity-75">{footnote}</p>
    </div>
    <div className="flex w-full items-center justify-center lg:w-1/2">
      <img
        src={image}
        alt={imageAlt}
        width={640}
        height={640}
        loading="lazy"
        decoding="async"
        className="aspect-square h-auto w-full object-contain lg:h-160 lg:w-160"
      />
    </div>
  </div>
);
