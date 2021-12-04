import { makeAutoObservable } from "mobx";

import { defaultMusic, Music, PlayMode } from "../models/Music";

/**
 * 音乐播放相关全局状态
 */
class PlayState {
  /** 当前播放的音乐 */
  curMusic = { ...defaultMusic };
  /** 当前播放列表 */
  playList: Music[] = [];
  /** 播放状态 */
  playMode = PlayMode.NORMAL;

  constructor() {
    makeAutoObservable(this, undefined, {
      deep: true,
    });
  }
}

export const PlayStore = new PlayState();
