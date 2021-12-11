import { useEffect, useRef, useState } from "react";
import { ColorExtractor } from "image-color-extraction";

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

    const extractor = new ColorExtractor({ compresionRate: 0.5 });

    extractor.extractColor(imgEl.current).then(() => {
      if (!(extractor.colors && extractor.colors.length > 2)) return;
      const colors = extractor.chooseReadableColor();
      setColors({
        bgc: colors[0],
        color: colors[1],
      });
    });
  }, [albumUrl, imgEl.current]);

  return { ...colors, imgEl };
}
