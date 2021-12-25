import { UserProfile } from "../../models/User";
import _request from "../_request";

type GetUserByCookieResData = {
  profile: UserProfile;
};

/**
 * 通过cookie获取用户信息
 * @returns
 */
export async function getUserByCookieReq() {
  const res = await _request<GetUserByCookieResData>(
    {
      url: `/user/account`,
      method: "GET",
    },
    false
  );

  return res;
}
