import { MusicDetail } from "./Music";
import { UserProfile } from "./User";

export type PlayListID = number;

/**
 * 歌单信息\
 * 参数 Full 表示是否是完整信息\
 * 通过 `populateTracksReq` 方法将得到的 id 数组填充成除url外的完整信息
 */
export type PlayList<Full = false> = {
  id: PlayListID;
  name: string;
  coverImgUrl: string;
  userId: number;
  createTime: number;
  updateTime: number;
  /** 音乐数 */
  trackCount: number;
  playCount: number;
  commentCount: number;
  shareCount: number;
  subscribedCount: number;
  cloudTrackCount: number;
  description: string;
  tags: string[];

  creator: UserProfile;

  /**
   * 一开始有用的是 trackIds, 但是只有id有用\
   * 需调用 populateTracks 得到 MusicDetail
   */
  trackIds: (Full extends true ? MusicDetail : { id: number })[];

  /** 新增 */
  privacy: number;
  subscribers: UserProfile[];
};

export type UserPlayList = {
  playlist: PlayList[];
};
