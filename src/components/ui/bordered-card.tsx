import { cn } from "~/utils/utils";
import { type FC, type ReactNode } from "react";

const gradientLine =
  "linear-gradient(90deg, rgba(250,250,255,0) 0%, rgba(250,250,255,1) 5%, rgba(250,250,255,1) 95%, rgba(250,250,255,0) 100%)";

const CornerCircle = ({
  position,
}: {
  position: "top-left" | "bottom-left" | "top-right" | "bottom-right";
}) => {
  const isTop = position.startsWith("top");
  return (
    <div
      className={cn(
        "absolute left-full z-50 h-4 w-4 -translate-x-1/2 rounded-full border border-[#FAFAFF]/10 bg-[#0A0914]",
        isTop ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2",
      )}
    />
  );
};

type BorderedCardProps = {
  children: ReactNode;
  className?: string;
  leftSpacerWidth?: string;
  rightSpacerWidth?: string;
  lineWidth?: string;
};

export const BorderedCard: FC<BorderedCardProps> = ({
  children,
  className,
  leftSpacerWidth = "w-25",
  rightSpacerWidth = "w-30",
  lineWidth = "w-0 lg:w-328",
}) => (
  <div className={cn("relative z-40 flex h-full items-center justify-center", className)}>
    <div
      className={cn("absolute top-0 z-30 h-0.5", lineWidth)}
      style={{ background: gradientLine, opacity: 0.1 }}
    />
    <div
      className={cn("absolute bottom-0 z-30 h-0.5", lineWidth)}
      style={{ background: gradientLine, opacity: 0.1 }}
    />

    <div className={cn("relative top-0 h-full", leftSpacerWidth)}>
      <CornerCircle position="top-left" />
      <CornerCircle position="bottom-left" />
    </div>

    <div className="group relative flex h-full w-full items-center border border-t-0 border-b-0 border-white/10 bg-[#0A0914]">
      {children}

      <CornerCircle position="top-right" />
      <CornerCircle position="bottom-right" />
    </div>

    <div className={cn("h-full", rightSpacerWidth)} />
  </div>
);
