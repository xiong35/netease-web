import { Lyric } from "../models/lyric";

const reg = /\[(\d+):(\d+)\.\d+](.*)/;

export function lyricStr2LyricItem(str: string | null): Lyric[] {
  if (!str) return [];

  const lyricLines = str.split("\n");

  return lyricLines
    .map((line) => {
      const res = reg.exec(line);
      if (!res) return null;

      const [_, min, sec, content] = res;

      const lyric: Lyric = {
        content,
        startSec: parseInt(min) * 60 + parseInt(sec),
        ref: null,
      };

      return lyric;
    })
    .filter((l) => l !== null) as Lyric[];
}
