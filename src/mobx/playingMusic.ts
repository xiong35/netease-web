import { makeAutoObservable } from "mobx";

import { Lyric } from "../models/lyric";
import { MusicID } from "../models/Music";
import { UserProfile } from "../models/User";
import { getMusicLyricReq } from "../network/music/getMusicLyric";
import { lyricStr2LyricItem } from "../utils/lyricStr2LyricItem";

/**
 * 音乐播放状态\
 * 与 PlayState 的区别: 这个存单曲播放进度的信息, PlayState 存歌单相关信息
 */
class PlayingMusicState {
  /** 当前播放进度(秒) */
  lyric: Lyric[] = [];
  _audioRef: HTMLAudioElement | null = null;

  get audioRef() {
    return this._audioRef;
  }

  set audioRef(ref: HTMLAudioElement | null) {
    if (this._audioRef || !ref) return;
    this._audioRef = ref;
  }

  getCurrentTime() {
    if (!this.audioRef) return 0;
    return Math.round(this.audioRef.currentTime);
  }
  set currentTime(time: number) {
    if (!this.audioRef) return;
    this.audioRef.currentTime = time;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async setLyric(musicID: MusicID) {
    const lyricStr = await getMusicLyricReq({ musicID });

    this.lyric = lyricStr2LyricItem(lyricStr);
  }
}

export const PlayingMusicStore = new PlayingMusicState();
