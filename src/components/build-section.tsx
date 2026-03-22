import techIntegrations from "~/assets/tech-integrations.png?url";
import techIntegrationsMobile from "~/assets/tech-integrations-mobile.png?url";
import { SectionContainer } from "./ui/section-container";
import { BulletItem } from "./ui/feature-block";
import { buildCards } from "~/utils/constants";
import { type BuildCardData } from "~/utils/types";

const BuildCard = ({ icon: Icon, title, bullets, image, imageAlt }: BuildCardData) => (
  <div className="flex gap-6 rounded-2xl border border-primary/10 px-4 sm:gap-8 sm:px-6 md:rounded-3xl md:px-8">
    <div className="flex flex-col items-center py-4 sm:py-6 md:py-8">
      <div className="flex w-full flex-col items-start gap-4">
        <Icon />
        <div className="flex flex-col text-[18px] leading-[106%] font-semibold tracking-[0%] sm:text-[22px]">
          <p>{title}</p>
        </div>

        <ul className="flex flex-col items-start gap-3 self-stretch">
          {bullets.map((text) => (
            <BulletItem key={text} text={text} />
          ))}
        </ul>

        <p className="text-md leading-snug font-semibold tracking-widest text-accent-primary hover:text-primary/80">
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
          className="h-40 w-full max-w-87 object-contain sm:h-50 sm:max-w-100 md:h-64 md:max-w-120 lg:h-56 lg:max-w-full xl:h-72 2xl:h-80"
        />
      </div>
    </div>
  </div>
);

export const BuildSection = () => {
  return (
    <section className="content-auto">
      <SectionContainer className="flex flex-col items-center justify-center gap-10">
        <img
          width={1090}
          height={294}
          src={techIntegrations}
          alt="Technology integrations supported by CometChat"
          loading="lazy"
          decoding="async"
          className="hidden w-full max-w-full md:block"
        />
        <img
          width={349}
          height={167}
          src={techIntegrationsMobile}
          alt="Technology integrations supported by CometChat"
          loading="lazy"
          decoding="async"
          className="mx-auto block w-full max-w-87 md:hidden"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[26px] leading-[106%] font-semibold tracking-[0%] sm:text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[56px]">
            Plug In your logic. <br /> Or build it here.
          </h2>
          <p className="text-[16px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[18px] md:text-[22px]">
            Two paths. Same full-stack experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-6 xl:gap-8">
          {buildCards.map((card) => (
            <BuildCard key={card.title} {...card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
