import _request from '../_request'
import { User } from '../../models/User'
import { enCookie } from "../../constants/cookie";

/**
 * 获取热门列表
 * @returns 热门列表数组
 */

export type GetUserReqData = {
	/** 用户的 id */
	uid: number
}

export async function getUser(
	params: GetUserReqData
): Promise<User | null> {
	const res = await _request<User>({
		url: '/user/detail',
		method: 'GET',
    params: { ...params, cookie: enCookie },
	})
	if (!res) return null
	return res
}
