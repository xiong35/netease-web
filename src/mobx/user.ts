import { makeAutoObservable } from 'mobx'

import { showToast } from '../utils/showToast'
import { getUser } from '../network/user/getUser'
import { UserProfile } from '../models/User'

/**
 * 用户详情页相关状态
 */

class userState {
  userProfile: UserProfile | null = null
  level = 0

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
    this.userProfile = userData.profile
    this.level = userData.level

    console.log(userData)
  }
}

export const userStore = new userState()
