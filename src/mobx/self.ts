import { makeAutoObservable } from "mobx";

import { UserProfile } from "../models/User";

/**
 * 音乐播放相关全局状态
 */
class SelfState {
  /** 个人信息 */
  self?: UserProfile;

  constructor() {
    makeAutoObservable(this);
  }
}

export const SelfStore = new SelfState();
