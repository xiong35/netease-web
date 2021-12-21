import { UserProfile } from './User'

/**
 * 单个收藏者的信息
 */

export type SingleSubscriber = UserProfile

/**
 * 收藏者
 */

export type Subscribers = {
  subscribers: SingleSubscriber[]
  total: number
}