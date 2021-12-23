import { MusicDetail } from "../../models/Music";
import _request from "../_request";

export enum SearchType {
  "单曲" = 1,
  "专辑" = 10,
  "歌手" = 100,
}

export type SearchByKeywordsReqData = {
  /** 搜索关键词 */
  keywords: string;
  /** 返回数量 */
  limit?: number;
  /** 偏移量，页数 * limit */
  offset?: number;
  /**
   * 搜索类型；默认为 1 即单曲
   * 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户,
   * 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
   */
  type?: SearchType;
};

export type SearchByKeywordsRes = {
  result: {
    songs: MusicDetail[];
    songCount: number;
  };
};

/**
 * 根据关键词搜索
 * @returns
 */
export async function searchByKeywordsReq(params: SearchByKeywordsReqData) {
  const res = await _request<SearchByKeywordsRes>({
    url: "/cloudsearch",
    method: "GET",
    params,
  });

  return res;
}
