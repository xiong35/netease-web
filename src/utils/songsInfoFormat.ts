import { TableContent } from "../components/SongsList";
import { MusicDetail } from "../models/Music";
import { timeFormat } from "./timeFormat";

type FormatSongs = TableContent[];

export const songsInfoFormat = (songsInfo: MusicDetail[]): FormatSongs => {
  const songsInfoFormat: FormatSongs = [];

  for (const song of songsInfo) {
    const time = timeFormat(song.dt / 1000);
    const artist = song.ar
      .reduce((pre, cur) => pre + "/" + cur.name, "")
      .slice(1);

    // 似乎好像什么都不能点击，linkTo好像没啥用（
    const songFormat: TableContent = {
      id: song.id,
      专辑: {
        content: song.al.name,
        // 没有专辑页面，无link
      },
      时长: {
        content: time,
      },
      歌手: {
        content: artist,
        // 没有歌手页hhh，偷懒用了字符串
      },
      音乐标题: {
        content: song.name,
      },
    };

    songsInfoFormat.push(songFormat);
  }

  return songsInfoFormat;
};
