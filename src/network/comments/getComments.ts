import _request from '../_request'
import { Comments } from '../../models/Comments'
import { enCookie } from "../../constants/cookie";

/**
 * 获取评论
 * @returns 评论
 */

export type GetCommentsReqData = {
	/** 要获取评论的歌单的 id */
	id: number
  /** 获取评论的数量 */
  limit? : number
  /** 偏移量，用于分页 */
  offset? : number
}

export async function getComments(
	params: GetCommentsReqData
): Promise<Comments | null> {
	const res = await _request<Comments>({
		url: '/comment/playlist',
		method: 'GET',
    params: { ...params, cookie: enCookie },
	})
	if (!res) return null
	return res
}
