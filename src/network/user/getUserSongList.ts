import _request from '../_request'
import { UserPlayList } from '../../models/PlayList'

/**
 * 获取用户的歌单
 * @returns 用户歌单
 */

export type GetUserReqData = {
	/** 用户的 id */
	uid: number
}

export async function getUserSongList(
	params: GetUserReqData
): Promise<UserPlayList | null> {
	const res = await _request<UserPlayList>({
		url: '/user/playlist',
		method: 'GET',
    params: { ...params },
	})
	if (!res) return null
	return res
}
