import { enCookie } from "../../constants/cookie";
import { RecommendedMusic } from "../../models/Music";
import _request from "../_request";

/**
 * 获得推荐的歌单(需登录)
 */
export async function getRecommendedPlayListReq() {
  const res = await _request<{ recommend: RecommendedMusic[] }>({
    url: "/recommend/resource",
    method: "GET",
    params: { cookie: enCookie },
  });

  if (!res || !res.recommend) return null;

  return res.recommend;
}
