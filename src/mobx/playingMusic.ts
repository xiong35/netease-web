import { makeAutoObservable } from "mobx";

import { MusicID } from "../models/Music";
import { UserProfile } from "../models/User";
import { getMusicLyricReq } from "../network/music/getMusicLyric";

/**
 * 音乐播放状态\
 * 与 PlayState 的区别: 这个存单曲播放进度的信息, PlayState 存歌单相关信息
 */
class PlayingMusicState {
  /** 当前播放进度(秒) */
  currentTime = 0;
  lyric?: string;

  constructor() {
    makeAutoObservable(this);
  }

  async setLyric(musicID: MusicID) {
    const lyric = (await getMusicLyricReq({ musicID })) || undefined;

    this.lyric = lyric;
  }
}

export const PlayingMusicStore = new PlayingMusicState();
