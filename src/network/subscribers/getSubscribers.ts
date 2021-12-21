import _request from '../_request'
import { Subscribers } from '../../models/Subscribers'

import { enCookie } from "../../constants/cookie";

/**
 * 获取热门列表
 * @returns 热门列表数组
 */

export type GetSubscribersReqData = {
	/** 要获取收藏者的歌单的 id */
	id: number
  /** 获取收藏者的数量 */
  limit? : number
  /** 偏移量，用于分页 */
  offset? : number
}

export async function getSubscribers(
	params: GetSubscribersReqData
): Promise<Subscribers | null> {
	const res = await _request<Subscribers>({
		url: '/playlist/subscribers',
		method: 'GET',
    params: { ...params, cookie: enCookie },
	})
	if (!res) return null
	return res
}
