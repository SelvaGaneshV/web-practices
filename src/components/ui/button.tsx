import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { type ButtonHTMLAttributes, type FC } from "react";
import { cn } from "~/utils/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: clsx(
          "relative overflow-hidden bg-accent-primary",
          "bg-[radial-gradient(circle_80px_at_30%_0%,rgba(216,210,244,0.4)_1%,rgba(216,210,244,0.1)_50%,transparent_100%)]",
          "hover:brightness-105 active:scale-[0.98]",
        ),

        secondary: clsx("bg-transparent", "border border-primary/10", "backdrop-blur-md"),
      },

      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-10 py-5 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export const Button: FC<ButtonProps> = ({ size, variant, className, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ size, variant, className }))} />;
};
