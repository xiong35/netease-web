import { User } from "../../models/User";
import _request from "../_request";

/**
 * 获取热门列表
 * @returns 热门列表数组
 */

export type GetUserReqData = {
  /** 用户的 id */
  uid: number;
};

export async function getUser(params: GetUserReqData): Promise<User | null> {
  const res = await _request<User>({
    url: "/user/detail",
    method: "GET",
    params,
  });
  if (!res) return null;
  return res;
}
