import { makeAutoObservable } from 'mobx'

import { showToast } from '../utils/showToast'
import { getUser } from '../network/user/getUser'
import { getUserSongList } from '../network/user/getUserSongList'
import { UserProfile } from '../models/User'
import { PlayList } from '../models/PlayList'

/**
 * 用户详情页相关状态
 */

class userState {
  userProfile: UserProfile | null = null
  // 用户等级
  level = 0
  // 用户的歌单总数据
  songList: PlayList[] = []
  // 创建的歌单
  createdSongList: PlayList[] = []
  // 收藏的歌单
  subscribedSongList: PlayList[] = []

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * 设置用户信息
   * @param uid 用户id
   * @returns void
   */
  async setUser(uid: number) {
    const userData = await getUser({
      uid,
    })
    if (!userData) return showToast('加载用户失败，请重试', 'error')

    const userSongListData = await getUserSongList({
      uid
    })
    if (!userSongListData) return showToast('加载用户歌单失败，请重试', 'error')

    this.userProfile = userData.profile
    this.level = userData.level
    this.songList = userSongListData.playlist

    this.createdSongList = this.songList.filter(item => item.creator.userId === this.userProfile?.userId)
    this.subscribedSongList = this.songList.filter(item => item.creator.userId !== this.userProfile?.userId)
    console.log(userData)
  }
}

export const userStore = new userState()
