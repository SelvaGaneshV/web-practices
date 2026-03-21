import { cn } from "~/utils/utils";
import { type FC, type ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  gradient?: string;
};

export const GradientText: FC<GradientTextProps> = ({
  children,
  className,
  as: Tag = "div",
  gradient = "linear-gradient(rgb(255,255,255) 37.23%, rgb(106,85,215) 126.95%)",
}) => (
  <Tag
    className={cn("bg-clip-text text-transparent", className)}
    style={{
      backgroundImage: gradient,
      backgroundSize: "100% 1.15em",
      backgroundRepeat: "repeat",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {children}
  </Tag>
);
