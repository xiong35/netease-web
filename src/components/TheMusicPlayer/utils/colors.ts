import { getContrast } from "./readableColor";
import { getMainColors } from "./octree";

/** 一个像素的信息由 r, g, b 的值构成 */
export type PixelData = [number, number, number];
/** 一张图片的信息由若干像素点构成 */
export type ImgPixels = PixelData[];

function list2ImgPixels(data: Uint8ClampedArray): ImgPixels {
  const pixels: ImgPixels = [];

  for (let i = 0; i < data.length; i += 4) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  return pixels;
}

export function chooseReadableColor(colors: string[]) {
  const [bgc, ...rest] = colors;

  for (const front of rest) {
    if (getContrast(bgc, front) > 4) return [bgc, front];
  }

  return colors.slice(0, 2);
}

export function getColor(data: Uint8ClampedArray) {
  const pixels = list2ImgPixels(data);
  const colors = getMainColors(pixels);

  return chooseReadableColor(colors);
}
