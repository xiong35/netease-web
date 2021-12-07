import { useMemo } from "react";

import { ImgCompProps } from "./";

export default function ImgNext({ color, className }: ImgCompProps) {
  return useMemo(
    () => (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1050"
        width="200"
        height="200"
        className={className}
      >
        <path
          d="M686.08 448L339.2 207.36c-34.56-24.32-83.2 1.28-83.2 43.52v481.28c0 42.24 47.36 67.84 83.2 43.52l346.88-240.64c29.44-21.76 29.44-66.56 0-87.04z"
          fill={color}
          p-id="1199"
        ></path>
        <path
          d="M746.24 785.92c-21.76 0-38.4-16.64-38.4-38.4v-512c0-21.76 16.64-38.4 38.4-38.4s38.4 16.64 38.4 38.4v512c0 20.48-16.64 38.4-38.4 38.4z"
          fill={color}
          p-id="1200"
        ></path>
      </svg>
    ),
    [color, className]
  );
}
