import * as React from "react";

export const Setting: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.604 15.777a3 3 0 00-1.209 0c-.46.095-.873.326-1.2.51l-.09.05-11.1 6.166-.094.052c-.347.191-.783.431-1.118.794a3 3 0 00-.642 1.092c-.155.47-.153.967-.152 1.363V38.196c-.001.396-.003.893.152 1.362a3 3 0 00.642 1.092c.335.364.77.604 1.118.795l.094.052 11.1 6.167.09.05c.327.183.74.414 1.2.508a3 3 0 001.209 0c.46-.094.873-.325 1.2-.508l.09-.05 11.1-6.167.094-.052c.347-.191.783-.431 1.117-.795.29-.314.509-.686.643-1.092.155-.469.153-.966.152-1.362V25.804c.001-.396.003-.894-.152-1.363a2.999 2.999 0 00-.642-1.091c-.335-.364-.771-.604-1.118-.795l-.095-.052-11.1-6.167-.089-.05c-.327-.183-.74-.414-1.2-.509zM31.999 36.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        fill="url(#paint0_linear_4492_3921)"
        opacity={0.6}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4492_3921"
          x1={31.9994}
          y1={15.7158}
          x2={31.9994}
          y2={48.2839}
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
