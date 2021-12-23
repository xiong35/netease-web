import { MusicID } from "../../models/Music";
import _request from "../_request";

export type GetMusicLyricReqData = {
  musicID: MusicID;
};

/**
 * 获得音乐的歌词
 * @returns
 */
export async function getMusicLyricReq(data: GetMusicLyricReqData) {
  const res = await _request<{ lrc: { lyric: string } }>({
    url: `/lyric?id=${data.musicID}`,
    method: "GET",
  });

  if (!res || !res.lrc || !res.lrc.lyric) return null;

  return res.lrc.lyric;
}
