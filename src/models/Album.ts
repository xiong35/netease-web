import { UserProfile } from "./User";

/** 专辑简介 */
export type AlbumBrief = {
  /** 标题 */
  name: string;
  id: number;
  /** 毫秒时间戳 */
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  /** 封面 url */
  coverImgUrl: string;
  description: string;
  tags: string[];
  playCount: number;
  creator: UserProfile;
};
