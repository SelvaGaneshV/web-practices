import type { FC, SVGProps } from "react";

export const LinkedInLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2zM6 11.5H4.5V6H6v5.5zm-.75-6.134a.879.879 0 01-.875-.882c0-.487.392-.882.875-.882s.875.395.875.882a.878.878 0 01-.875.882zM12 11.5h-1.5V8.698c0-1.684-2-1.557-2 0V11.5H7V6h1.5v.883C9.198 5.59 12 5.494 12 8.12v3.38z"
        fill="#FAFAFF"
        opacity={0.84}
      />
    </svg>
  );
};
