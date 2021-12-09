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

/** 若没有满足的就要对所有主色加权算出最合适的 */
type ContrastData = {
  /** 这是第几多的颜色 */
  index: number;
  /** 颜色 hex 串 */
  front: string;
  /** 对应的对比度 */
  contrast: number;
};

/** 计算一种前景色的得分, 分越高越优先 */
function getScore(d: ContrastData) {
  return d.contrast * d.contrast - d.index * d.index;
}

/**
 * 从主色中选取对比度较高的一组颜色
 * @returns `[bgColor, frontColor]`
 */
export function chooseReadableColor(colors: string[]) {
  // 得到背景色和待选的前景色
  const [bgc, ...rest] = colors.slice(0, 8);

  const contrastData: ContrastData[] = [];

  for (let index = 0; index < rest.length; index++) {
    const front = rest[index];
    const contrast = getContrast(bgc, front);
    contrastData.push({
      contrast,
      front,
      index,
    });
  }

  // 选择对比度与数量的综合得分最高的前景色
  contrastData.sort((a, b) => getScore(b) - getScore(a));
  const frontData = contrastData[0];

  return [bgc, frontData.front];
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
