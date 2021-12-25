import { Comments } from "../../models/Comments";
import _request from "../_request";

/**
 * 获取评论
 * @returns 评论
 */

export type GetCommentsReqData = {
  /** 要获取评论的歌单的 id */
  id: number;
  /** 获取评论的数量 */
  limit?: number;
  /** 偏移量，用于分页 */
  offset?: number;
};

export async function getComments(
  params: GetCommentsReqData
): Promise<Comments | null> {
  const res = await _request<Comments>({
    url: "/comment/playlist",
    method: "GET",
    params,
  });
  if (!res) return null;
  return res;
}
