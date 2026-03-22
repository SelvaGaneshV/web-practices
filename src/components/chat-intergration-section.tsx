import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BulletItem } from "./ui/feature-block";
import { BorderedCard } from "./ui/bordered-card";
import { GridCard } from "./ui/grid-card";
import { SectionContainer } from "./ui/section-container";
import { chatIntegrationCards } from "~/utils/constants";
import { type ChatIntegrationCardData } from "~/utils/types";
import { cn } from "~/utils/utils";

const cornerMap = [
  ["top-left", "bottom-left"] as const,
  undefined,
  ["top-right", "bottom-right"] as const,
];
const cornerMapMobile = [
  ["top-left", "top-right"] as const,
  undefined,
  ["bottom-left", "bottom-right"] as const,
];
const borderMap = [
  "border-l border-primary/10",
  "border-r border-l border-primary/10",
  "border-r border-primary/10",
];
const borderMapMobile = [
  "border-l broder-r border-primary/10",
  "border-t border-b border-primary/10",
  "border-r broder-l  border-primary/10",
];

const StaticCard = ({
  icon: Icon,
  title,
  description,
  bullets,
  linkText,
  href = "#",
}: ChatIntegrationCardData) => (
  <div className="flex h-full flex-col gap-4">
    <Icon />
    <h4 className="text-[20px] leading-[106%] font-semibold tracking-[0%] xl:text-[24px]">{title}</h4>
    <p className="text-md opacity-75">{description}</p>
    <ul className="flex flex-col items-start gap-3 self-stretch">
      {bullets.map((text) => (
        <BulletItem key={text} text={text} />
      ))}
    </ul>
    <a href={href} className="text-md font-semibold text-accent-primary">
      {linkText}
    </a>
  </div>
);

const HoverCard = ({
  icon: Icon,
  title,
  description,
  bullets,
  linkText,
  href = "#",
}: ChatIntegrationCardData) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex h-full flex-col justify-between gap-16 overflow-hidden xl:gap-30"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(130,80,255,0.3) 0%, rgba(130,80,255,0.12) 40%, transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.div
            key="default"
            className="flex h-full flex-col justify-between gap-20 xl:gap-36"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <Icon />
            <div className="flex flex-col gap-4">
              <h4 className="text-[20px] leading-[106%] font-semibold tracking-[0%] xl:text-[24px]">{title}</h4>
              <p className="text-md opacity-75">{description}</p>
              <a href={href} className="text-md font-semibold text-accent-primary">
                {linkText}
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            className="flex h-full flex-col justify-end gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <h4 className="text-[20px] leading-[106%] font-semibold tracking-[0%] xl:text-[24px]">{title}</h4>
            <ul className="flex flex-col items-start gap-3 self-stretch">
              {bullets.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.03,
                  }}
                >
                  <BulletItem text={text} />
                </motion.li>
              ))}
            </ul>
            <a href={href} className="text-md font-semibold text-accent-primary">
              {linkText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ChatIntergrationSection = () => {
  return (
    <section className="content-auto">
      <SectionContainer>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[16px] leading-[120%] font-medium tracking-[0.5%] text-accent-primary sm:text-[18px] md:text-[22px]">
            Chat integration options
          </p>
          <h1 className="text-center text-[26px] leading-[106%] font-semibold tracking-[0%] sm:text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[56px]">
            Your launch, your way. Done right.
          </h1>
          <p className="text-center text-[14px] leading-[120%] font-medium tracking-[0.5%] opacity-75 sm:text-[16px] md:text-[18px] lg:text-[22px]">
            Start with what gets you to production fastest – or matches your needs the best. <br />{" "}
            Swap it out or level it up later.
          </p>
        </div>
        <div className="w-full py-4">
          <BorderedCard
            showCircles={false}
            leftSpacerWidth="lg:w-10 xl:w-25 w-0"
            rightSpacerWidth="lg:w-12 xl:w-30 w-0"
            className="w-full min-w-0"
          >
            <div className="grid w-full grid-cols-1 lg:grid-cols-3">
              {chatIntegrationCards.map((card, i) => (
                <>
                  <GridCard
                    key={card.title}
                    corners={cornerMap[i] ? [...cornerMap[i]] : undefined}
                    className={`flex flex-col ${borderMap[i]} hidden p-6 lg:flex lg:p-5 xl:p-8`}
                  >
                    <HoverCard {...card} />
                  </GridCard>
                  <GridCard
                    key={card.title + "-mobile"}
                    corners={cornerMapMobile[i] ? [...cornerMapMobile[i]] : undefined}
                    className={cn(`flex flex-col p-6 md:p-8 lg:hidden`, borderMapMobile[i])}
                  >
                    <StaticCard {...card} />
                  </GridCard>
                </>
              ))}
            </div>
          </BorderedCard>
        </div>
      </SectionContainer>
    </section>
  );
};
