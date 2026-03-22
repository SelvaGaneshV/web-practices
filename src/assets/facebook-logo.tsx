import type { FC, SVGProps } from "react";

export const FacebookLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M14.322 8.039c0-3.557-2.848-6.44-6.36-6.44C4.447 1.6 1.6 4.482 1.6 8.04c0 3.213 2.326 5.877 5.367 6.36V9.9H5.352V8.04h1.615v-1.42c0-1.613.95-2.504 2.403-2.504.696 0 1.424.125 1.424.125v1.585h-.802c-.79 0-1.037.496-1.037 1.006v1.208h1.764l-.282 1.86H8.955v4.5c3.041-.483 5.367-3.146 5.367-6.36z"
        fill="#FAFAFF"
        opacity={0.84}
      />
    </svg>
  );
};
