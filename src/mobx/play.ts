import { makeAutoObservable } from "mobx";

import { showToast } from "../utils/showToast";
import { getMusicUrlReq } from "../network/music/getMusicUrl";
import { PlayListID } from "../models/PlayList";
import { defaultMusic, MusicDetail, MusicID, MusicNUrl, PlayMode } from "../models/Music";

/**
 * 音乐播放相关全局状态
 */
class PlayState {
  /** 当前播放的音乐 */
  curMusic: MusicNUrl = { ...defaultMusic };
  /** 当前播放列表 */
  tracks: MusicDetail[] = [];
  /** 播放状态 */
  playMode = PlayMode.NORMAL;
  /** 随机洗过的音乐**id**的表 */
  private randTrack: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  /** 刷新随机列表 */
  private resetRandList() {
    const list = this.tracks.map((m) => m.id);

    for (let i = list.length; i > 0; i--) {
      const temp = list[i];
      const randIndex = Math.floor(Math.random() * (i + 1));

      list[i] = list[randIndex];
      list[randIndex] = temp;
    }

    this.randTrack = list;
  }

  /**
   * 设置当前音乐
   * @param curMusic 可传 id 或 MusicDetail
   * @returns 是否成功
   */
  private async setCurMusic(curMusic: MusicID | MusicDetail): Promise<boolean> {
    if (typeof curMusic === "number")
      curMusic = this.tracks.find((m) => m.id === curMusic) as MusicDetail;

    const url = await getMusicUrlReq({ id: curMusic.id });

    if (!url) {
      showToast("获得歌曲链接失败qwq", "error");
      return false;
    }

    const curMusicFull: MusicNUrl = {
      ...curMusic,
      url,
    };

    this.curMusic = curMusicFull;

    return true;
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
      const curIndex = this.randTrack.findIndex(
        (id) => id === this.curMusic.id
      );
      const nextInd =
        (curIndex + (direction === "next" ? 1 : -1) + this.randTrack.length) %
        this.randTrack.length;

      // TODO
      nextInd;
    } else {
      // 如果是其他模式, 则按歌单顺序切
      // TODO
    }
  }

  setPlayList(id: PlayListID) {
    console.log(id);
  }
}

export const PlayStore = new PlayState();
