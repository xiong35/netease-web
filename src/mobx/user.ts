import { makeAutoObservable } from "mobx";

import { PlayList } from "../models/PlayList";
import { UserProfile } from "../models/User";
import { getUser } from "../network/user/getUser";
import { getUserPlayListsReq } from "../network/user/getUserPlayLists";
import { showToast } from "../utils/showToast";

/**
 * 用户详情页相关状态
 */

class userState {
  uid = 32953014;
  userProfile: UserProfile | null = null;
  // 用户等级
  level = 0;
  // 用户的歌单总数据
  songList: PlayList[] = [];
  // 创建的歌单
  createdSongList: PlayList[] = [];
  // 收藏的歌单
  subscribedSongList: PlayList[] = [];
  // 显示的是创建的歌单/收藏的歌单
  showIndex: 0 | 1 = 0;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 设置用户信息
   * @param uid 用户id
   * @returns void
   */
  async setUser(uid: number) {
    this.uid = uid;
    const userData = await getUser({
      uid,
    });
    if (!userData) return showToast("加载用户失败，请重试", "error");

    const userSongListData = await getUserPlayListsReq({
      uid,
    });
    if (!userSongListData)
      return showToast("加载用户歌单失败，请重试", "error");

    this.userProfile = userData.profile;
    this.level = userData.level;
    this.songList = userSongListData.playlist;

    this.createdSongList = this.songList.filter(
      (item) => item.creator.userId === this.userProfile?.userId
    );
    this.subscribedSongList = this.songList.filter(
      (item) => item.creator.userId !== this.userProfile?.userId
    );
  }

  /**
   * 设置当前显示的是创建的歌单/收藏的歌单
   * @param index 序号
   * @returns void
   */
  setShowIndex(index: 0 | 1) {
    this.showIndex = index;
  }
}

export const userStore = new userState();
