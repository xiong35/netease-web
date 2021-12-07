import { makeAutoObservable } from "mobx";

import { defaultMusic, Music, PlayMode } from "../models/Music";

/**
 * 音乐播放相关全局状态
 */
class PlayState {
  /** 当前播放的音乐 */
  curMusic = { ...defaultMusic };
  /** 当前播放列表 */
  tracks: Music[] = [];
  /** 随机洗过的音乐**id**的表 */
  _randTrack: number[] = [];
  /** 播放状态 */
  playMode = PlayMode.NORMAL;

  constructor() {
    makeAutoObservable(this);
  }

  /** 刷新随机列表 */
  resetRandList() {
    const list = this.tracks.map((m) => m.id);

    for (let i = list.length; i > 0; i--) {
      const temp = list[i];
      const randIndex = Math.floor(Math.random() * (i + 1));

      list[i] = list[randIndex];
      list[randIndex] = temp;
    }

    this._randTrack = list;
  }

  /** 根据 id 将 tracks 中该歌曲的信息补全 */
  async populateMusic(id: number) {
    const targetIndex = this.tracks.findIndex((m) => m.id === id);

    // 有专辑信息则认为有全部信息, 不需要额外获取
    if (this.tracks[targetIndex].al) return;

    // TODO 获取这首歌的详细信息
  }

  /**
   * 切歌
   * @param direction 上一首 or 下一首
   */
  switchMusic(direction: "next" | "prev") {
    if (this.playMode === PlayMode.RAND) {
      // 如果的随机模式则在随机列表中切
      // 随机推荐算法参考 https://www.ifanr.com/1379669
      // 本应用中随机算法为洗牌算法, 即固定播放洗过的歌单
      // 一方面保证用户切上一首时可以保证可靠性
      // 其次也可使用户短时间内听不到重复的歌
      const curIndex = this._randTrack.findIndex(
        (id) => id === this.curMusic.id
      );
      const nextInd =
        (curIndex + (direction === "next" ? 1 : -1) + this._randTrack.length) %
        this._randTrack.length;

      // TODO
      nextInd;
    } else {
      // 如果是其他模式, 则按歌单顺序切
      // TODO
    }
  }
}

export const PlayStore = new PlayState();
