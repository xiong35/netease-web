function getLuminance(color: string) {
  const rgb = hexToRgb(color);
  const RsRGB = rgb.r / 255;
  const GsRGB = rgb.g / 255;
  const BsRGB = rgb.b / 255;
  let R, G, B;
  if (RsRGB <= 0.03928) {
    R = RsRGB / 12.92;
  } else {
    R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
  }
  if (GsRGB <= 0.03928) {
    G = GsRGB / 12.92;
  } else {
    G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
  }
  if (BsRGB <= 0.03928) {
    B = BsRGB / 12.92;
  } else {
    B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
  }
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

// 获取对比度
export function getContrast(back: string, front: string) {
  const backLum = getLuminance(back) + 0.05;
  const frontLum = getLuminance(front) + 0.05;
  return Math.max(backLum, frontLum) / Math.min(backLum, frontLum);
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}
