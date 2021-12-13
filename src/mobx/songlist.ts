import { makeAutoObservable } from 'mobx'

import { showToast } from '../utils/showToast'
import { getPlayListReq } from '../network/playList/getPlayList'
import {
	PlayListID as SongListID,
} from '../models/PlayList'
import { MusicDetail } from '../models/Music'
import { UserProfile as User } from '../models/User'

/**
 * 歌单详情页相关状态
 */

/**
 * 设置当前歌单
 * @param playlist 选择的歌单, 可为 id
 * @returns 是否成功
 */

class SongListState {
  // id
  id = 24381615
	// 歌单名
	name = ''
	// 封面图片url
	coverImgUrl = ''
	// 歌单创建时间
	createTime = 0
	// 歌单是否可见
	privacy = 0
	// 收藏数
	subscribedCount = 0
	// 分享数
	shareCount = 0
	// 歌曲数
	trackCount = 0
	// 播放数
	playCount = 0
	// 歌单描述文字
	description = ''
	// 标签
	tags: string[] = []
	// 评论数
	commentCount = 0
	// 订阅者
	subscribers: User[] = []
	// 创建者
	creator: User | null = null
	// 歌曲列表
	trackIds: MusicDetail[] = []

	constructor() {
		makeAutoObservable(this)
	}

	async setSongList(songListID: SongListID) {
    const songListData = await getPlayListReq({
      id: songListID,
    })
    if (!songListData) return showToast('加载歌单失败，请重试', 'error')
    console.log(songListData)

    this.name = songListData.name
    this.coverImgUrl = songListData.coverImgUrl
    this.createTime = songListData.createTime
    this.privacy = songListData.privacy
    this.subscribedCount = songListData.subscribedCount
    this.shareCount = songListData.shareCount
    this.trackCount = songListData.trackCount
    this.playCount = songListData.playCount
    this.description = songListData.description
    this.tags = songListData.tags
    this.commentCount = songListData.commentCount
    this.subscribers = songListData.subscribers
    this.creator = songListData.creator
    this.trackIds = songListData.trackIds
	}
}

export const SongListStore = new SongListState()
