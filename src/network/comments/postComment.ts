import _request from '../_request'
import { Comments } from '../../models/Comments'
import { COOKIE } from '../../constants/localStorageKey'

/**
 * 发布、删除评论
 * @returns 成功返回用户信息
 */

export type PostCommentReqData = {
  /** 操作类型，1发送 2回复 0删除 */
  t: 0 | 1 | 2
  /** 资源类型，0歌曲，1mv，2歌单，3专辑，4电台，5视频，6动态*/
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6
  /** 对应资源id */
  id: number
  /** 要发送的内容 */
  content: string
  /** 回复的评论id（回复评论时必填） */
  commentId?: number
}

export async function postComment(
  params: PostCommentReqData
): Promise<Comments | null> {
  const res = await _request<Comments>({
    url: '/comment',
    method: 'GET',
    params: { ...params, cookie: localStorage.getItem(COOKIE) },
  })
  if (!res) return null
  return res
}
