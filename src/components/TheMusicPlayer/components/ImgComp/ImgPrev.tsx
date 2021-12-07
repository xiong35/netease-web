import { useMemo } from "react";

import { ImgCompProps } from "./";

export default function ImgPrev({ color, className }: ImgCompProps) {
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
          d="M381.44 577.28l346.88 240.64c34.56 24.32 83.2-1.28 83.2-43.52V293.12c0-42.24-47.36-67.84-83.2-43.52L381.44 490.24c-30.72 20.48-30.72 65.28 0 87.04z"
          fill={color}
          p-id="1051"
        ></path>
        <path
          d="M320 828.16c-21.76 0-38.4-16.64-38.4-38.4v-512c0-21.76 16.64-38.4 38.4-38.4s38.4 16.64 38.4 38.4v512c0 20.48-16.64 38.4-38.4 38.4z"
          fill={color}
          p-id="1052"
        ></path>
      </svg>
    ),
    [color, className]
  );
}
