import { useId, type FC, type SVGProps } from "react";

export const Stars05: FC<SVGProps<SVGSVGElement>> = (props) => {
  const id = useId();
  const g0 = `stars05-grad0-${id}`;
  const g1 = `stars05-grad1-${id}`;
  const g2 = `stars05-grad2-${id}`;
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} y={0.5} width={63} height={63} rx={7.5} stroke="#FAFAFF" strokeOpacity={0.1} />
      <g opacity={0.6}>
        <path
          d="M22.25 17.001a1.5 1.5 0 10-3 0v2.25H17a1.5 1.5 0 100 3h2.25v2.25a1.5 1.5 0 003 0v-2.25h2.25a1.5 1.5 0 000-3h-2.25v-2.25z"
          fill={`url(#${g0})`}
        />
        <path
          d="M22.25 39.501a1.5 1.5 0 10-3 0v2.25H17a1.5 1.5 0 100 3h2.25v2.25a1.5 1.5 0 003 0v-2.25h2.25a1.5 1.5 0 000-3h-2.25v-2.25z"
          fill={`url(#${g1})`}
        />
        <path
          d="M34.9 17.962a1.5 1.5 0 00-2.8 0l-2.602 6.764c-.45 1.171-.592 1.509-.786 1.781a2.999 2.999 0 01-.706.707c-.273.194-.61.335-1.782.786L19.461 30.6a1.5 1.5 0 000 2.8l6.763 2.601c1.172.45 1.51.592 1.782.786a3 3 0 01.706.707c.194.272.335.61.786 1.781L32.1 46.04a1.5 1.5 0 002.8 0l2.602-6.763c.45-1.171.592-1.509.786-1.781a3 3 0 01.706-.707c.272-.194.61-.335 1.782-.786l6.763-2.601a1.5 1.5 0 000-2.8L40.775 28c-1.172-.45-1.51-.593-1.782-.786a2.999 2.999 0 01-.706-.707c-.194-.272-.336-.61-.786-1.781l-2.602-6.764z"
          fill={`url(#${g2})`}
        />
      </g>
      <defs>
        <linearGradient
          id={g0}
          x1={31.9994}
          y1={15.501}
          x2={31.9994}
          y2={48.501}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFF" />
          <stop offset={0.285} stopColor="#B1B1B4" />
          <stop offset={1} stopColor="#646465" />
        </linearGradient>
        <linearGradient
          id={g1}
          x1={31.9994}
          y1={15.501}
          x2={31.9994}
          y2={48.501}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFF" />
          <stop offset={0.285} stopColor="#B1B1B4" />
          <stop offset={1} stopColor="#646465" />
        </linearGradient>
        <linearGradient
          id={g2}
          x1={31.9994}
          y1={15.501}
          x2={31.9994}
          y2={48.501}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFF" />
          <stop offset={0.285} stopColor="#B1B1B4" />
          <stop offset={1} stopColor="#646465" />
        </linearGradient>
      </defs>
    </svg>
  );
};
