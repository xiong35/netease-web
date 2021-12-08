import { useMemo } from "react";

import { ImgCompProps } from ".";

export default function ImgPaused({ color, className }: ImgCompProps) {
  return useMemo(
    () => (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="902"
        width="200"
        height="200"
        className={className}
      >
        <path
          d="M500.864 952.64c-239.648 0-434.656-194.976-434.656-434.624 0-239.68 195.008-434.624 434.656-434.624 239.68 0 434.656 194.944 434.656 434.624 0 239.68-195.008 434.624-434.656 434.624m0-933.28C225.92 19.36 2.24 243.104 2.24 518.016 2.24 792.96 225.92 1016.64 500.864 1016.64s498.656-223.68 498.656-498.624c0-274.912-223.68-498.624-498.656-498.624"
          p-id="1063"
          fill={color}
        ></path>
        <path
          d="M404.864 326.016a32 32 0 0 0-32 32v320a32 32 0 0 0 64 0v-320a32 32 0 0 0-32-32M596.864 326.016a32 32 0 0 0-32 32v320a32 32 0 0 0 64 0v-320a32 32 0 0 0-32-32"
          p-id="1064"
          fill={color}
        ></path>
      </svg>
    ),
    [color, className]
  );
}
