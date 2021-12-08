import { getContrast } from "./readableColor";
import { getMainColors } from "./octree";

/** 一个像素的信息由 r, g, b 的值构成 */
export type PixelData = [number, number, number];
/** 一张图片的信息由若干像素点构成 */
export type ImgPixels = PixelData[];

/**
 * 将一维的图片数据数组转化为 ImgPixels
 * @returns
 */
function list2ImgPixels(data: Uint8ClampedArray): ImgPixels {
  const pixels: ImgPixels = [];

  for (let i = 0; i < data.length; i += 4) {
    // 第 4 个通道为 alpha, 不需要
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  return pixels;
}

/**
 * 从主色中选取对比度较高的一组颜色
 * @returns `[bgColor, frontColor]`
 */
export function chooseReadableColor(colors: string[]) {
  // 得到背景色和待选的前景色
  const [bgc, ...rest] = colors;

  for (const front of rest) {
    // 前景背景的对比度需大于 5
    if (getContrast(bgc, front) > 5) return [bgc, front];
  }

  // 找不到就用最前面的俩凑合了
  return colors.slice(0, 2);
}

/**
 * 对外暴露的得到主色函数
 * @param data {Uint8ClampedArray} 图片像素数据
 * @returns `[bgColor, frontColor]`
 */
export function getColor(data: Uint8ClampedArray) {
  const pixels = list2ImgPixels(data);
  const colors = getMainColors(pixels);

  return chooseReadableColor(colors);
}
