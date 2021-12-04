import _request from "../_request";
import { PlayList } from "../../models/PlayList";
import { enCookie } from "../../constants/cookie";

export type GetPlayListReqData = {
  /** 要获取的歌单的 id */
  id: number;
};

/**
 * 获取歌单详细信息
 * @returns 歌单
 */
export async function getPlayListReq(
  params: GetPlayListReqData
): Promise<PlayList | null> {
  const res = await _request<{ playlist: PlayList }>({
    url: "/playlist/detail",
    method: "GET",
    params: { ...params, cookie: enCookie },
  });

  if (!res || !res.playlist) return null;

  return res.playlist;
}
