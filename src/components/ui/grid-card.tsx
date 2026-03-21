import { cn } from "~/utils/utils";
import { type FC, type ReactNode } from "react";

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const cornerClasses: Record<CornerPosition, string> = {
  "top-left": "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "left-full top-0 -translate-x-1/2 -translate-y-1/2",
  "bottom-left": "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "left-full bottom-0 -translate-x-1/2 translate-y-1/2",
};

const CornerDot = ({ position }: { position: CornerPosition }) => (
  <div
    className={cn(
      "absolute z-40 h-4 w-4 rounded-full border border-[#FAFAFF]/10 bg-[#0A0914]",
      cornerClasses[position],
    )}
  />
);

type GridCardProps = {
  children: ReactNode;
  className?: string;
  corners?: CornerPosition[];
};

export const GridCard: FC<GridCardProps> = ({
  children,
  className,
  corners = ["top-left", "top-right", "bottom-left", "bottom-right"],
}) => (
  <div className={cn("relative", className)}>
    {children}
    {corners.map((pos) => (
      <CornerDot key={pos} position={pos} />
    ))}
  </div>
);
