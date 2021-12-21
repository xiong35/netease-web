import { UserProfile } from "../../models/User";
import _request from "../_request";

export type GetUserByCookieReqData = {
  cookie: string;
};

type GetUserByCookieResData = {
  profile: UserProfile;
};

/**
 * 通过cookie获取用户信息
 * @returns
 */
export async function getUserByCookieReq(data: GetUserByCookieReqData) {
  const cookie = encodeURIComponent(data.cookie);
  const res = await _request<GetUserByCookieResData>({
    url: `/user/account?cookie=${cookie}`,
    method: "GET",
  });

  return res;
}
