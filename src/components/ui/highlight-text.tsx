import { cn } from "~/utils/utils";
import { type FC, type ReactNode } from "react";

type HighlightTextProps = {
  children: ReactNode;
  className?: string;
};

export const HighlightText: FC<HighlightTextProps> = ({ children, className }) => (
  <span
    className={cn(
      "bg-linear-to-b from-white to-accent-primary bg-clip-text text-transparent",
      className,
    )}
  >
    {children}
  </span>
);
