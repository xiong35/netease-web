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

/** 歌曲的简略信息 */
export type Music = MusicUrl & Partial<MusicDetail>;
/** 歌曲的完整信息 */
export type MusicFull = MusicUrl & MusicDetail;
export enum PlayMode {
  LOOP,
  NORMAL,
  RAND,
}

export const defaultMusic: MusicFull = {
  al: {
    id: 0,
    name: "",
    picUrl: "",
  },
  ar: [
    {
      id: 0,
      name: "",
    },
  ],
  id: 0,
  name: "",
  publishTime: 0,
  size: 0,
  type: "",
  url: "",
};
