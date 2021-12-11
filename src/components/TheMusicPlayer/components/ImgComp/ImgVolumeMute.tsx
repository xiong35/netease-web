import { useMemo } from "react";

import { ImgCompProps } from "./";

export default function ImgVolumeMute({ color, className }: ImgCompProps) {
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
          d="M672.8 730.496V344.192c92.864 15.36 164 96 164 193.152 0 97.152-71.136 177.792-164 193.152zM300.8 747.328c0 17.664-14.4 32-32 32H124.8c-17.632 0-32-14.336-32-32v-400c0-17.6 14.368-32 32-32h144c17.6 0 32 14.4 32 32v400z m58.432-430.944l249.568-173.76V909.44l-248.32-135.136c2.528-8.64 4.32-17.568 4.32-27.008v-400c0-10.88-2.24-21.184-5.568-30.944z m313.568-36.864V81.344h-0.448a31.552 31.552 0 0 0-31.552-31.552c-6.72 0-12.576 2.56-17.696 6.112l-0.576-0.832L319.36 266.112A95.008 95.008 0 0 0 268.8 251.328H124.8c-52.928 0-96 43.072-96 96v400c0 52.96 43.072 96 96 96h144c20 0 38.56-6.176 53.952-16.64l302.72 164.8 0.448-0.832a30.784 30.784 0 0 0 14.88 4.224 31.584 31.584 0 0 0 31.552-31.552h0.448V795.2c128.288-15.872 228-125.344 228-257.824 0-132.48-99.712-241.984-228-257.824zM1022.08 32.384a31.552 31.552 0 0 0-44.608 0l-0.32-0.32-58.688 58.688-58.688-58.688-0.32 0.32a31.584 31.584 0 0 0-44.64 44.608h0.032l-0.32 0.32 58.688 58.688-58.688 58.688 0.32 0.32a31.584 31.584 0 0 0 0 44.64 31.648 31.648 0 0 0 44.608 0l0.32 0.288 58.688-58.688 58.688 58.688 0.32-0.32a31.552 31.552 0 1 0 44.608-44.608l0.32-0.32-58.688-58.688 58.688-58.688-0.32-0.32a31.552 31.552 0 0 0 0-44.608"
          p-id="915"
          fill={color}
        ></path>
      </svg>
    ),
    [color, className]
  );
}
