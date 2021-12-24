import { MusicDetail } from "../../models/Music";
import { PlayList } from "../../models/PlayList";
import { UserProfile } from "../../models/User";
import _request from "../_request";

export enum SearchType {
  "单曲" = 1,
  // "专辑" = 10,
  // "歌手" = 100,
  "歌单" = 1000,
  "用户" = 1002,
}

export type SearchByKeywordsReqData<T extends SearchType> = {
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
  type?: T;
};

export type SearchRes<T extends SearchType> = {
  result: T extends SearchType.单曲
    ? {
        songs: MusicDetail[];
        songCount: number;
      }
    : T extends SearchType.歌单
    ? {
        playlists: PlayList[];
        playlistCount: number;
      }
    : {
        userprofiles: (UserProfile & {
          avatarDetail: { identityIconUrl: string };
        })[];
        userprofileCount: number;
      };
};

export /**
 * 根据关键词搜索
 * @returns
 */
async function searchByKeywordsReq<T extends SearchType>(
  params: SearchByKeywordsReqData<T>
) {
  const res = await _request<SearchRes<T>>({
    url: "/cloudsearch",
    method: "GET",
    params,
  });

  return res;
}
