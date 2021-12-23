import { makeAutoObservable } from "mobx";

import { SingleComment } from "../models/Comments";
import { MusicDetail } from "../models/Music";
import { PlayList, PlayListID as SongListID } from "../models/PlayList";
import { UserProfile } from "../models/User";
import { getComments } from "../network/comments/getComments";
import { postComment } from "../network/comments/postComment";
import { getPlayListReq } from "../network/playList/getPlayList";
import { getSubscribers } from "../network/subscribers/getSubscribers";
import { subscribe } from "../network/subscribers/subscribe";
import { showToast } from "../utils/showToast";

/**
 * 歌单详情页相关状态
 */

type PlayListWithNoCreator = {
  [K in keyof Omit<
    PlayList,
    "userId" | "updateTime" | "cloudTrackCount"
  >]: K extends "creator" ? null | UserProfile : PlayList[K];
};

class SongListState implements PlayListWithNoCreator {
  // id
  id = 24381615;
  // id = 2137987910

  // 歌单名
  name = "";
  // 封面图片url
  coverImgUrl = "";
  // 歌单创建时间
  createTime = 0;
  // 歌单是否可见
  privacy = 0;
  // 收藏数
  subscribedCount = 0;
  // 分享数
  shareCount = 0;
  // 歌曲数
  trackCount = 0;
  // 播放数
  playCount = 0;
  // 歌单描述文字
  description = "";
  // 标签
  tags: string[] = [];
  // 评论数
  commentCount = 0;
  // 订阅者
  subscribers: UserProfile[] = [];
  // 创建者
  creator: UserProfile | null = null;
  // 歌曲列表
  trackIds: MusicDetail[] = [];
  // 原始歌曲列表（为了排序而设置）
  protoTrackIds: MusicDetail[] = [];
  // 评论
  comments: SingleComment[] = [];
  // 精彩评论
  hotComments: SingleComment[] = [];

  // 是否查看歌单简介详情
  showDes = false;

  // 按标题排序的顺序，0 ~ 2分别代表不排序、升序和降序
  titleSeq: 0 | 1 | 2 = 0;
  // 按歌手排序的顺序
  arthorSeq: 0 | 1 | 2 = 0;
  // 按专辑排序的顺序
  albumSeq: 0 | 1 | 2 = 0;
  // 按时间排序的顺序
  timeSeq: 0 | 1 | 2 = 0;
  // 搜索内容
  searchStr = "";
  // 显示歌曲列表/评论/收藏者
  showIndex: 0 | 1 | 2 = 0;

  // 每一页评论的数量
  commentLimit = 60;
  // 评论页数数组
  commentPageIndex: number[] = [];

  // 每一页收藏者的数量
  subscriberLimit = 60;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 设置歌单信息
   * @param songListID 选择的歌单的id
   * @returns void
   */
  async setSongList(songListID: SongListID) {
    this.id = songListID;
    const songListData = await getPlayListReq({
      id: songListID,
    });
    if (!songListData) return showToast("加载歌单失败，请重试", "error");

    const commentsData = await getComments({
      id: songListID,
      limit: this.commentLimit,
    });
    if (!commentsData) return showToast("加载评论失败，请重试", "error");

    const subscribersData = await getSubscribers({
      id: songListID,
      limit: this.subscriberLimit,
    });
    if (!subscribersData) return showToast("加载收藏者失败，请重试", "error");

    this.name = songListData.name;
    this.coverImgUrl = songListData.coverImgUrl;
    this.createTime = songListData.createTime;
    this.privacy = songListData.privacy;
    this.subscribedCount = songListData.subscribedCount;
    this.shareCount = songListData.shareCount;
    this.trackCount = songListData.trackCount;
    this.playCount = songListData.playCount;
    this.description = songListData.description;
    this.tags = songListData.tags;
    this.commentCount = songListData.commentCount;
    // this.subscribers = songListData.subscribers
    this.creator = songListData.creator;
    this.trackIds = songListData.trackIds;
    this.protoTrackIds = songListData.trackIds;
    this.subscribers = songListData.subscribers;

    this.comments = commentsData.comments;
    this.hotComments = commentsData.hotComments;
    for (
      let i = this.commentLimit;
      i < this.commentCount + this.commentLimit;
      i += this.commentLimit
    ) {
      this.commentPageIndex.push(Math.floor(i / this.commentLimit));
    }

    this.subscribers = subscribersData.subscribers;
  }

  /**
   * 设置歌单不同页数的评论
   * @param index 页数
   * @returns void
   */
  async updateCommentPage(index: number) {
    const commentsData = await getComments({
      id: this.id,
      limit: this.commentLimit,
      offset: (index - 1) * this.commentLimit,
    });
    if (!commentsData) return showToast("加载评论失败，请重试", "error");
    this.comments = commentsData.comments;
  }

  /**
   * 设置歌单不同页数的评论
   * @param index 页数
   * @returns void
   */
  async updateSubscriberPage(index: number) {
    const subscribersData = await getSubscribers({
      id: this.id,
      limit: this.subscriberLimit,
      offset: (index - 1) * this.subscriberLimit,
    });
    if (!subscribersData) return showToast("加载评论失败，请重试", "error");
    this.subscribers = subscribersData.subscribers;
  }

  /**
   * 向歌单发送评论
   * @param content 评论内容
   *
   * @returns void
   */
  async postComment(content: string) {
    await postComment({
      t: 1,
      type: 2,
      id: this.id,
      content,
    });
    // 即使刷新评论界面，由于发请求的延迟，也没法立即看到
    // await this.updateCommentPage(1)
  }

  /**
   * 收藏歌单
   * @param content 评论内容
   *
   * @returns void
   */
  async subscribe(id: number) {
    await subscribe({
      t: 1,
      id,
    });
    this.subscribedCount++;
    this.setSongList(this.id);
  }

  /**
   * 取消收藏歌单
   * @param content 评论内容
   *
   * @returns void
   */
  async unSubscribe(id: number) {
    await subscribe({
      t: 2,
      id,
    });
    this.subscribedCount--;
    this.setSongList(this.id);
  }

  /**
   * 查看歌单简介
   * @param void
   * @returns void
   */
  toggleShowDes() {
    this.showDes = !this.showDes;
  }

  /**
   * 根据标题排序
   * @param state 值等于此时的titleSeq
   * @returns void
   */
  sortByTitle(state: 0 | 1 | 2) {
    this.arthorSeq = 0;
    this.albumSeq = 0;
    this.timeSeq = 0;
    if (state === 0) {
      this.trackIds.sort((obj1: MusicDetail, obj2: MusicDetail) =>
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
        new Intl.Collator("zh").compare(obj1.name, obj2.name)
      );
    } else if (state === 1) {
      this.trackIds.sort(
        (obj1: MusicDetail, obj2: MusicDetail) =>
          -new Intl.Collator("zh").compare(obj1.name, obj2.name)
      );
    } else {
      // 不能让this.tranckIds指向this.protoTrackIds，否则会修改其值
      this.trackIds = [...this.protoTrackIds];
    }
  }

  /**
   * 根据歌手排序
   * @param state 值等于此时的arthorSeq
   * @returns void
   */
  sortByArthor(state: 0 | 1 | 2) {
    this.titleSeq = 0;
    this.albumSeq = 0;
    this.timeSeq = 0;
    if (state === 0) {
      this.trackIds.sort((obj1: MusicDetail, obj2: MusicDetail) =>
        new Intl.Collator("zh").compare(obj1.ar[0].name, obj2.ar[0].name)
      );
    } else if (state === 1) {
      this.trackIds.sort(
        (obj1: MusicDetail, obj2: MusicDetail) =>
          -new Intl.Collator("zh").compare(obj1.ar[0].name, obj2.ar[0].name)
      );
    } else {
      this.trackIds = [...this.protoTrackIds];
    }
  }

  /**
   * 根据专辑排序
   * @param state 值等于此时的albumSeq
   * @returns void
   */
  sortByAlbum(state: 0 | 1 | 2) {
    this.titleSeq = 0;
    this.arthorSeq = 0;
    this.timeSeq = 0;
    if (state === 0) {
      this.trackIds.sort((obj1: MusicDetail, obj2: MusicDetail) =>
        new Intl.Collator("zh").compare(obj1.al.name, obj2.al.name)
      );
    } else if (state === 1) {
      this.trackIds.sort(
        (obj1: MusicDetail, obj2: MusicDetail) =>
          -new Intl.Collator("zh").compare(obj1.al.name, obj2.al.name)
      );
    } else {
      this.trackIds = [...this.protoTrackIds];
    }
  }

  /**
   * 根据时间排序
   * @param state 值等于此时的timeSeq
   * @returns void
   */
  sortByTime(state: 0 | 1 | 2) {
    this.titleSeq = 0;
    this.arthorSeq = 0;
    this.albumSeq = 0;
    if (state === 0) {
      this.trackIds.sort(
        (obj1: MusicDetail, obj2: MusicDetail) => obj1.dt - obj2.dt
      );
    } else if (state === 1) {
      this.trackIds.sort(
        (obj1: MusicDetail, obj2: MusicDetail) => obj2.dt - obj1.dt
      );
    } else {
      this.trackIds = [...this.protoTrackIds];
    }
  }

  /**
   * 重置各seq值，使各个选项都采用默认的排序方式
   * @param void
   * @returns void
   */
  resetSeq() {
    this.timeSeq = 0;
    this.arthorSeq = 0;
    this.albumSeq = 0;
    this.timeSeq = 0;
  }

  /**
   * 设置搜索内容
   * @param val 输入框的内容
   * @returns void
   */
  setSearchStr(val: string) {
    this.searchStr = val;
  }

  /**
   * 根据搜索内容，显示特定歌曲
   * @param searchStr 搜索内容
   * @returns 搜索是否成功
   */
  search(searchStr: string): boolean {
    const res = this.protoTrackIds.filter((obj) => {
      if (obj.name.includes(searchStr) || obj.al.name.includes(searchStr)) {
        return true;
      }
      // forEach遍历并不能被终止，必须使用for循环
      for (let i = 0; i < obj.ar.length; i++) {
        if (obj.ar[i].name.includes(searchStr)) {
          return true;
        }
      }
    });
    this.trackIds = [...res];
    if (res.length) return true;
    return false;
  }

  /**
   * 设置当前显示的是歌曲列表/评论/收藏者
   * @param index 序号
   * @returns void
   */
  setShowIndex(index: 0 | 1 | 2) {
    this.showIndex = index;
  }
}

export const SongListStore = new SongListState();
