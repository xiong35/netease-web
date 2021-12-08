import { useEffect, useRef, useState } from "react";

import { getMainColors, ImgPixels } from "../utils/colors";

const WIDTH = 300;

export function useColor(albumUrl?: string) {
  const [colors, setColors] = useState({
    color: "var(--on-bg)",
    bgc: "var(--bg)",
  });

  const imgEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgEl.current || !albumUrl) return;
    imgEl.current.onload = null;
    imgEl.current.onload = () => {
      if (!imgEl.current) return;
      let { width, height } = imgEl.current;
      height = Math.round((WIDTH * height) / width);
      width = WIDTH;

      imgEl.current.crossOrigin = "Anonymous";
      const canvasEl = document.createElement("canvas");
      canvasEl.width = width;
      canvasEl.height = height;
      const ctx = canvasEl.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(imgEl.current, 0, 0, width, height);
      const imgData = ctx.getImageData(0, 0, width, height).data;

      const colors = getMainColors(list2ImgPixels(imgData));

      setColors({ bgc: colors[0], color: colors[1] });
    };
  }, [albumUrl, imgEl.current]);

  return { ...colors, imgEl };
}

function list2ImgPixels(data: Uint8ClampedArray): ImgPixels {
  const pixels: ImgPixels = [];

  for (let i = 0; i < data.length; i += 4) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  return pixels;
}
