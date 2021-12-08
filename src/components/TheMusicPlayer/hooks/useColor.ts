import { useEffect, useRef, useState } from "react";

import { getColor } from "../utils/colors";

const WIDTH = 300;

/**
 * 根据图片提取其主色(背景色和字体色)
 * @param albumUrl 图片 url
 */
export function useColor(albumUrl?: string) {
  const [colors, setColors] = useState({
    color: "var(--on-bg)",
    bgc: "var(--bg)",
  });

  // 需得到图片元素来绘制 canvas
  const imgEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgEl.current || !albumUrl) return;
    imgEl.current.onload = null;
    imgEl.current.onload = () => {
      if (!imgEl.current) return;
      let { width, height } = imgEl.current;
      // 缩放宽高为 300 来加快速度
      height = Math.round((WIDTH * height) / width);
      width = WIDTH;

      // 解决 canvas 跨域问题
      imgEl.current.crossOrigin = "Anonymous";
      const canvasEl = document.createElement("canvas");
      canvasEl.width = width;
      canvasEl.height = height;
      const ctx = canvasEl.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(imgEl.current, 0, 0, width, height);
      // 得到 canvas 上的像素数据
      const imgData = ctx.getImageData(0, 0, width, height).data;

      const colors = getColor(imgData);

      setColors({ bgc: colors[0], color: colors[1] });
    };
  }, [albumUrl, imgEl.current]);

  return { ...colors, imgEl };
}
