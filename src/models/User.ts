/** 用户简略信息 */
export type UserBrief = {
  level: number;
  listenSongs: number;

  profile: UserProfile;
  createTime: number;
  createDays: number;
};

/** 用户详细信息 */
export type UserProfile = {
  userId: number;
  mutual: boolean;
  followed: boolean;
  avatarUrl: string;
  description: string;
  vipType: number;
  birthday: number;
  gender: 1 | 0;
  nickname: string;
  createTime: number;
  backgroundUrl: string;
  signature: string;
  followeds: number;
  follows: number;
  followMe: boolean;
  playlistCount: number;
};
