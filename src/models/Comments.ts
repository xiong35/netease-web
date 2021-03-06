import { UserProfile } from './User'

/**
 * 单个评论的信息
 */

export type SingleComment = {
  commentId: number
  user: UserProfile
  content: string
  time: number
  liked: boolean
  beReplied: beReplied[]
}

/**
 * 单个评论的信息
 */

export type Comments = {
  comments: SingleComment[]
  hotComments: SingleComment[]
  total: number
}

/**
 * 回复
 */

export type beReplied = {
  beRepliedCommentId: number
  content: string
  user: UserProfile
}