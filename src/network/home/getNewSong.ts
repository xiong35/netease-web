import { NewSong } from "../../models/Home";
import _request from "../_request";

/**
 * 获得主页推荐的最新单曲 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a8%e8%8d%90%e6%96%b0%e9%9f%b3%e4%b9%90
 */
export async function getNewSongReq() {
  const res = await _request<{ result: NewSong[] }>({
    url: "/personalized/newsong?limit=12",
    method: "GET",
  });

  if (!res || !res.result) return null;

  return res.result;
}
