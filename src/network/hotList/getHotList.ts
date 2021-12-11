import _request from '../_request'
import { HotList } from '../../models/HotList'

/**
 * 获取热门列表
 * @returns 热门列表数组
 */

export async function getHotList(): Promise<HotList[] | null> {
	let data: HotList[] | null = null
  const res = await _request<{hotList: HotList[]}>({
    url: '/search/hot/detail',
    method: 'GET',
  })
  // Some bugs to fix
  console.log(res)
	data = null
	return data
}