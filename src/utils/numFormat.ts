/**
 * 将数字转化成简短而模糊的表示\
 * 如 123456 => 12万
 * @param num
 */
export function numFormat(num: number): string {
  if (typeof num !== "number") return "";
  if (num < 1e4) {
    // 9999 以内直接返回
    return num.toString();
  } else if (num < 1e8) {
    // 9, 999, 999 - 9999, 显示 `xx.x万`
    return (Math.round(num / 1e3) / 10).toString() + "万";
  } else {
    // xx.x亿
    return (Math.round(num / 1e7) / 10).toString() + "亿";
  }
}
