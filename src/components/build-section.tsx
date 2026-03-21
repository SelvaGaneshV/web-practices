import tech from "~/assets/tech.png?url";
import { SectionContainer } from "./ui/section-container";
import { BulletItem } from "./ui/feature-block";
import { buildCards } from "~/utils/constants";
import { type BuildCardData } from "~/utils/types";

const BuildCard = ({ icon: Icon, title, bullets, image, imageAlt }: BuildCardData) => (
  <div className="flex gap-8 rounded-3xl border border-primary/10 px-8">
    <div className="flex flex-col items-center py-8">
      <div className="flex w-full flex-col items-start gap-4 lg:w-147">
        <Icon />
        <div className="flex flex-col text-2xl leading-snug font-semibold tracking-[0.09px] lg:w-129.5">
          <p>{title}</p>
        </div>

        <ul className="flex flex-col items-start gap-3 self-stretch">
          {bullets.map((text) => (
            <BulletItem key={text} text={text} />
          ))}
        </ul>

        <p className="text-md leading-snug font-semibold tracking-widest text-accent-primary opacity-75 hover:text-primary/80">
          Learn more
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <img
          src={image}
          alt={imageAlt}
          width={640}
          height={324}
          loading="lazy"
          decoding="async"
          className="aspect-square h-auto w-full object-contain lg:h-80 lg:w-160"
        />
      </div>
    </div>
  </div>
);

export const BuildSection = () => {
  return (
    <section className="content-auto">
      <SectionContainer className="flex flex-col items-center justify-center gap-10">
        <img width={1090} src={tech} />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-[48px] leading-[106%] font-semibold tracking-[0%]">
            Plug In your logic. <br /> Or build it here.
          </h1>
          <p className="text-[22px] leading-[120%] font-medium tracking-[0.5%] opacity-75">
            Two paths. Same full-stack experience.
          </p>
        </div>
        <div className="flex gap-8">
          {buildCards.map((card) => (
            <BuildCard key={card.title} {...card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
