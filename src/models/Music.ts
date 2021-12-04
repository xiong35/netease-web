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
  // al: {
  //   id: 0,
  //   name: "",
  //   picUrl: "",
  // },
  // ar: [
  //   {
  //     id: 0,
  //     name: "",
  //   },
  // ],
  // id: 0,
  // name: "",
  // publishTime: 0,
  // size: 0,
  // type: "",
  // url: "",

  type: "",
  id: 33894312,
  url: "http://m7.music.126.net/20211204155137/9fd6bc1c9b7ba8b400150c5e8c41f9e8/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3",
  size: 10691439,
  name: "情非得已 (童声版)",
  ar: [
    {
      id: 122455,
      name: "群星",
    },
  ],
  al: {
    id: 3263929,
    name: "热门华语275",
    picUrl:
      "https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
  },

  publishTime: 1388505600004,
};
