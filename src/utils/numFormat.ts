/**
 * ## 将大于10000的数字转化成'x万'的形式
 * @param num 数字
 * @returns 格式化数字字符串
 */

export function numFormat(num: number): string {
  if (num < 10000) {
    return num.toString()
  } else {
    const high = Math.floor((num / 10000))
    return `${high}万`
  }
}