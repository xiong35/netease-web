export type Banner = {
  imageUrl: string;
  targetId: number;
  // "typeTitle": "新歌首发",
  typeTitle: string;
};

/**
 * 独家放送的定义 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e7%8b%ac%e5%ae%b6%e6%94%be%e9%80%81%e5%85%a5%e5%8f%a3%e5%88%97%e8%a1%a8
 */
export type Personalized = {
  id: number;
  picUrl: string;
  name: string;
};
