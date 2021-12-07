import { useMemo } from "react";

import { ImgCompProps } from "./";

export default function ImgPlay({ color, className }: ImgCompProps) {
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
          d="M943.36 472.32L433.92 119.04c-49.92-34.56-117.76 1.28-117.76 61.44v706.56c0 60.16 67.84 96 117.76 61.44l509.44-353.28c42.24-29.44 42.24-93.44 0-122.88z"
          fill={color}
          p-id="1496"
        ></path>
      </svg>
    ),
    [color, className]
  );
}
