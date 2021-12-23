/**
 * 音乐播放要用到的歌词类型
 */
export type Lyric = {
  content: string;
  ref: HTMLDivElement | null;
  startSec: number;
};
