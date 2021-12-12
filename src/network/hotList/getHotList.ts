import _request from '../_request'
import { HotList } from '../../models/HotList'

/**
 * 获取热门列表
 * @returns 热门列表数组
 */

export async function getHotList(): Promise<HotList[] | null> {
  const res = await _request<{data: HotList[]}>({
    url: '/search/hot/detail',
    method: 'GET',
  })
  if (!res) return null
	return res.data
}