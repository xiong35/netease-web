import { COOKIE } from "../../constants/localStorageKey";
import _request from "../_request";

/**
 * 收藏歌单
 * @returns 成功返回 { code: 200 }
 */

type ResType = {
  code: number;
};

export type SubscribeReqData = {
  /** 操作类型，1收藏，2取消收藏 */
  t: 1 | 2;
  /** 歌单id */
  id: number;
};

export async function subscribe(
  params: SubscribeReqData
): Promise<ResType | null> {
  const res = await _request<ResType>({
    url: "/playlist/subscribe",
    method: "GET",
    params,
  });
  if (!res) return null;
  return res;
}
