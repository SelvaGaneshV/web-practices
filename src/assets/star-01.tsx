import type { FC, SVGProps } from "react";

export const Stars01: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 13l.784 1.569c.266.53.399.796.576 1.026a3 3 0 00.545.545c.23.177.495.31 1.026.575L11 17.5l-1.569.785c-.53.265-.796.398-1.026.575a3 3 0 00-.545.545c-.177.23-.31.495-.576 1.026L6.5 22l-.784-1.569c-.266-.53-.399-.796-.576-1.026a3 3 0 00-.545-.545c-.23-.177-.495-.31-1.026-.575L2 17.5l1.569-.785c.53-.265.796-.398 1.026-.575a3 3 0 00.545-.545c.177-.23.31-.495.576-1.026L6.5 13z"
        fill="url(#paint0_linear_3654_27973)"
      />
      <path
        d="M15 2l1.179 3.064c.282.734.423 1.1.642 1.409a3 3 0 00.706.706c.309.22.675.36 1.409.642L22 9l-3.064 1.179c-.734.282-1.1.423-1.409.642a3 3 0 00-.706.706c-.22.309-.36.675-.642 1.409L15 16l-1.179-3.064c-.282-.734-.423-1.1-.642-1.409a3 3 0 00-.706-.706c-.309-.22-.675-.36-1.409-.642L8 9l3.064-1.179c.734-.282 1.1-.423 1.409-.642a3 3 0 00.706-.706c.22-.309.36-.675.642-1.409L15 2z"
        fill="url(#paint1_linear_3654_27973)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3654_27973"
          x1={12}
          y1={2}
          x2={12}
          y2={34.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AD94F2" />
          <stop offset={1} stopColor="#3302B8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3654_27973"
          x1={12}
          y1={2}
          x2={12}
          y2={34.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AD94F2" />
          <stop offset={1} stopColor="#3302B8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
