import { makeAutoObservable } from "mobx";

import { defaultMusic, MusicDetail, MusicID, MusicNUrl, PlayMode } from "../models/Music";
import { PlayList, PlayListID } from "../models/PlayList";
import { getMusicUrlReq } from "../network/music/getMusicUrl";
import { getPlayListReq } from "../network/playList/getPlayList";
import { showToast } from "../utils/showToast";

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
  private playlistID?: PlayListID;

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

    if (!url) return false;

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
  async switchMusic(direction: "next" | "prev", leap = 1): Promise<void> {
    let toSet: number | MusicDetail;

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
        (curIndex +
          (direction === "next" ? 1 : -1) * leap +
          this.randTrack.length) %
        this.randTrack.length;

      toSet = this.randTrack[nextInd];
    } else {
      // 如果是其他模式, 则按歌单顺序切
      const curIndex = this.tracks.findIndex((t) => t.id === this.curMusic.id);
      const nextInd =
        (curIndex +
          (direction === "next" ? 1 : -1) * leap +
          this.tracks.length) %
        this.tracks.length;
      toSet = this.tracks[nextInd];
    }
    const success = await this.setCurMusic(toSet);

    if (success) return;

    if (leap === 7) return showToast("获得歌曲链接失败qwq", "error");
    else return this.switchMusic(direction, leap + 1);
  }

  /**
   * ## Set Playlist and Music
   * ### 设置当前歌单并自动切歌
   * > 不支持播放一首**非歌单内**的歌曲(比如添加到下一首播放), 要播放歌曲必须设置歌单
   * > 如需脱离歌单播放音乐, 请转而调用 setMusicsWithoutPlaylist 方法
   * @param playlist 要设置的播放列表, 可为 ID 或**完整列表**, 传入 ID 会发请求将其填充成完整列表,
   *                 传入完整列表会直接复用(节省一次网络请求).
   *                 若传入 ID 或传入列表 ID 与当前播放列表 ID 相同则不处理(除非设置 force)
   * @param musicID (可选)歌单中的音乐 ID. 若指定, 将当前播放音乐设为此曲,
   *                否则根据播放模式自动设置当前播放音乐. 若与当前音乐 ID 相同则不处理(除非设置 force)
   * @param force 强制更新歌单和歌曲(无论 ID 是否相同)
   */
  async setPlayListNMusic(
    playlist: PlayListID | PlayList<true>,
    musicID?: MusicID,
    force = false
  ) {
    // 将 playlist 填充为完整的 PlayList
    if (typeof playlist === "number") {
      if (playlist === this.playlistID && !force) {
        /* 若与当前播放列表 ID 相同则不处理 */
      } else {
        const fullPlaylist = await getPlayListReq({
          id: playlist,
        });
        if (!fullPlaylist) return showToast("加载歌单失败，请重试", "error");
        this.tracks = fullPlaylist.trackIds;
        this.playlistID = playlist;
        // 重置随机播放列表
        this.resetRandList();
      }
    } else {
      if (playlist.id === this.playlistID && !force) {
        this.tracks = playlist.trackIds;
        this.playlistID = playlist.id;
        // 重置随机播放列表
        this.resetRandList();
      }
    }

    if (musicID) {
      if (musicID !== this.curMusic.id && !force) {
        this.setCurMusic(musicID);
      }
    } else {
      if (this.playMode === PlayMode.RAND) {
        // 设置当前音乐
        this.setCurMusic(this.randTrack[0]);
      } else {
        this.setCurMusic(this.tracks[0]);
      }
    }
  }

  /**
   * 设置播放列表为一组音乐, 并设置当前歌曲为其中第一首
   * @param musics 设置的播放列表(长度为 0 会直接返回)
   */
  async setMusicsWithoutPlaylist(musics: MusicDetail[]) {
    if (musics.length === 0) return;
    this.tracks = musics;
    this.playlistID = Date.now();

    this.setCurMusic(this.tracks[0]);
  }

  /**
   * 切换播放模式
   */
  switchPlayMode() {
    if (this.playMode === PlayMode.NORMAL)
      return (this.playMode = PlayMode.RAND);
    if (this.playMode === PlayMode.RAND) return (this.playMode = PlayMode.LOOP);
    if (this.playMode === PlayMode.LOOP)
      return (this.playMode = PlayMode.NORMAL);
  }
}

export const PlayStore = new PlayState();
