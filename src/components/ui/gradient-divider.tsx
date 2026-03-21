import { cn } from "~/utils/utils";

const gradientDividerStyle = {
  borderBottom: "1px solid",
  borderImageSource:
    "linear-gradient(90deg, rgba(250,250,255,0) 0%, rgba(250,250,255,0.1) 5%, rgba(250,250,255,0.1) 95%, rgba(250,250,255,0) 100%)",
  borderImageSlice: 1,
};

export const GradientDivider = ({ className }: { className?: string }) => (
  <div className={cn("w-full", className)} style={gradientDividerStyle} />
);
