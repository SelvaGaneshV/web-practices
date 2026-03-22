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
    <h4 className="text-[24px] leading-[106%] font-semibold tracking-[0%]">{title}</h4>
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
      className="flex h-full flex-col justify-between gap-30 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ x: "60%", y: "-60%", scale: 0.5, opacity: 0 }}
        animate={
          hovered
            ? { x: "0%", y: "0%", scale: 1, opacity: 1 }
            : { x: "0%", y: "-60%", scale: 0.5, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(130,80,255,0.3) 0%, rgba(130,80,255,0.12) 40%, transparent 70%)",
        }}
      />
      <AnimatePresence mode="popLayout">
        {!hovered ? (
          <motion.div
            key="default"
            className="flex h-full flex-col justify-between gap-36"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Icon />
            <div className="flex flex-col gap-4">
              <h4 className="text-[24px] leading-[106%] font-semibold tracking-[0%]">{title}</h4>
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
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <h4 className="text-[24px] leading-[106%] font-semibold tracking-[0%]">{title}</h4>
            <ul className="flex flex-col items-start gap-3 self-stretch">
              {bullets.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: i * 0.05,
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
          <p className="text-[18px] leading-[120%] font-medium tracking-[0.5%] text-accent-primary md:text-[22px]">
            Chat integration options
          </p>
          <h1 className="text-center text-[32px] leading-[106%] font-semibold tracking-[0%] md:text-[48px]">
            Your launch, your way. Done right.
          </h1>
          <p className="text-center text-[18px] leading-[120%] font-medium tracking-[0.5%] opacity-75 md:text-[22px]">
            Start with what gets you to production fastest – or matches your needs the best. <br />{" "}
            Swap it out or level it up later.
          </p>
        </div>
        <div className="w-full py-4">
          <BorderedCard
            showCircles={false}
            leftSpacerWidth="md:w-25 w-0"
            rightSpacerWidth="md:w-30 w-0"
            className="w-full min-w-0"
          >
            <div className="grid w-full grid-cols-1 md:grid-cols-3">
              {chatIntegrationCards.map((card, i) => (
                <>
                  <GridCard
                    key={card.title}
                    corners={cornerMap[i] ? [...cornerMap[i]] : undefined}
                    className={`flex flex-col ${borderMap[i]} hidden p-8 md:flex`}
                  >
                    <HoverCard {...card} />
                  </GridCard>
                  <GridCard
                    key={card.title + "-mobile"}
                    corners={cornerMapMobile[i] ? [...cornerMapMobile[i]] : undefined}
                    className={cn(`flex flex-col p-8 md:hidden`, borderMapMobile[i])}
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
