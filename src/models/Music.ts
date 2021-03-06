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

  id: 0,
  url: "",
  name: "",
  ar: [
    {
      id: 0,
      name: "",
    },
  ],
  dt: 0,
  al: {
    id: 0,
    name: "",
    picUrl: "",
  },

  publishTime: Date.now(),
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
