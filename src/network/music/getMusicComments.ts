import { PER_PAGE } from "../../constants/paging";
import { Comments } from "../../models/Comments";
import _request from "../_request";

export type GetMusicCommentsReqData = {
  page: number;
  musicID: number;
};

/**
 * 获得歌曲的评论
 * @returns
 */
export async function getMusicCommentsReq(data: GetMusicCommentsReqData) {
  const res = await _request<Comments>({
    url: `/comment/music?id=${data.musicID}&limit=${PER_PAGE}&offset=${
      (data.page - 1) * PER_PAGE
    }`,
    method: "GET",
  });

  if (!res || typeof res.total !== "number") return null;

  return res;
}
