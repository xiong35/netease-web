export type MusicID = number;
/**
 * 歌曲简略信息, 请求 `/playlist/detail` 的 track 中是这个数据
 */
export type MusicBrief = {
  name: string;
  id: MusicID;
  /** artists */
  ar: {
    id: number;
    name: string;
  }[];
};

/**
 * 歌手信息
 */
export type MusicAr = {
  name: string;
};

/**
 * 歌曲详细信息, 请求 `/song/detail` 得到
 */
export type MusicDetail = {
  /** album */
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  /** 歌曲时长, ms */
  dt: number;
  /** 歌曲出处(描述性文字) */
  alia: string[];
  /** 作者 */
  ar: MusicAr[];
  publishTime: number;
} & MusicBrief;

/**
 * music and url\
 * 歌曲完整信息, 请求 `/song/url` 得到
 */

export type MusicNUrl = {
  url?: string;
} & MusicDetail;

export const defaultMusic: MusicNUrl = {
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

  id: 33894312,
  url: "http://m7.music.126.net/20211204155137/9fd6bc1c9b7ba8b400150c5e8c41f9e8/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3",
  name: "情非得已 (童声版)",
  ar: [
    {
      id: 122455,
      name: "群星",
    },
  ],
  dt: 1000 * 60 * 3,
  al: {
    id: 3263929,
    name: "热门华语275",
    picUrl:
      "https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
  },

  publishTime: 1388505600004,
  alia: [],
};

export enum PlayMode {
  LOOP,
  NORMAL,
  RAND,
}

/**
 * 调用`/recommend/resource`接口获得的音乐数据
 */
export type RecommendedPlaylist = {
  id: number;
  type: 1;
  /** 例子: "这些充满『强烈画面感』的音乐"; */
  name: string;
  /** 例子: "根据你喜欢的单曲《通天大道宽又阔》推荐"; */
  copywriter: string;
  picUrl: string;
  playcount: number;
  /** ms 时间戳 */
  createTime: number;
  trackCount: 462;
};
