import cloudIcon from "../img/cloud.svg";
import downloadIcon from "../img/download.svg";
import fmIcon from "../img/fm.svg";
import recentMusicIcon from "../img/recentMusic.svg";
import starIcon from "../img/star.svg";

type MyMusicItem = {
  icon: string;
  content: string;
};

export const myMusic: MyMusicItem[] = [
  {
    icon: downloadIcon,
    content: "本地与下载",
  },
  {
    icon: recentMusicIcon,
    content: "最近播放",
  },
  {
    icon: cloudIcon,
    content: "我的音乐云盘",
  },
  {
    icon: fmIcon,
    content: "我的播客",
  },
  {
    icon: starIcon,
    content: "我的收藏",
  },
];
