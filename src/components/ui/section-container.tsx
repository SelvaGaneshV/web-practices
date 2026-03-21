import { cn } from "~/utils/utils";
import { type FC, type ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  as: Tag = "div",
}) => (
  <Tag className={cn("container mx-auto max-w-360 px-5 md:px-8 lg:px-10 xl:px-20", className)}>
    {children}
  </Tag>
);
