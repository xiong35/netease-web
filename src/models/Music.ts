/** 歌曲简略信息 */
export type MusicUrl = {
  id: number;
  /** 音源地址 */
  url: string;
  size: number;
  type: "mp3" | string;
};

/** 歌曲详细信息 */
export type MusicDetail = {
  name: string;
  id: number;
  /** artists */
  ar: {
    id: number;
    name: string;
  }[];
  /** album */
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  publishTime: number;
};

/* 以上为 api 返回的类型 */
/* ******************** */
/* 以下为前端要用的类型 */

export type Music = {
  id: number;
  /** 音源地址 */
  url: string;
  album: {
    id: number;
    /** 专辑封面 url */
    picUrl: string;
    name: string;
  };
  /** 作者 */
  artist: {
    id: number;
    name: string;
  };
  /** 歌词信息 */
  lyric?: string;
};
