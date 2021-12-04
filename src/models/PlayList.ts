import { UserProfile } from "./User";
import { MusicDetail } from "./Music";

/** 歌单信息 */
export type PlayList = {
  id: number;
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
  cloudTrackCount: 1;
  description: string;
  tags: string[];

  creator: UserProfile;

  tracks: MusicDetail[];
};
