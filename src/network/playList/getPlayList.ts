import { PlayList } from "../../models/PlayList";
import _request from "../_request";
import { populateTracksReq } from "./populateTracks";

export type GetPlayListReqData = {
  /** 要获取的歌单的 id */
  id: number;
};

/**
 * 获取歌单详细信息(已进行填充)
 * @returns 有歌曲详情的歌单
 */
export async function getPlayListReq(
  params: GetPlayListReqData
): Promise<PlayList<true> | null> {
  const res = await _request<{ playlist: PlayList }>({
    url: "/playlist/detail",
    method: "GET",
    params,
  });

  if (!res || !res.playlist) return null;

  const tracks = await populateTracksReq({
    ids: res.playlist.trackIds.map((t) => t.id),
  });

  if (!tracks) return null;

  const playListFull = res.playlist as unknown as PlayList<true>;

  playListFull.trackIds = tracks;

  return playListFull;
}
