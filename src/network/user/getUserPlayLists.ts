import { PlayList } from "../../models/PlayList";
import _request from "../_request";

export type GetUserPlayListsReqData = {
  uid: number;
  limit?: number;
  offset?: number;
};

/**
 * 获取用户创建和收藏的歌单
 * @returns
 */
export async function getUserPlayListsReq(params: GetUserPlayListsReqData) {
  const res = await _request<{ playlist: PlayList[] }>({
    url: `/user/playlist`,
    method: "GET",
    params: { ...params, limit: 999 }, // 不是，就他那奇怪的接口还分页？
  });

  return res;
}
