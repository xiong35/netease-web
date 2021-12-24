/**
 * 将秒转化成字符串
 * @param time 时间的**秒数**
 */
export function timeFormat(time: number): string {
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  const minutes = (Math.floor(time / 60) % 60).toString().padStart(2, "0");

  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");

  if (hours === "00") {
    return `${minutes}:${seconds}`;
  } else {
    return `${hours}:${minutes}:${seconds}`;
  }
}
