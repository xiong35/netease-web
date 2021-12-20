import { UserProfile } from "../../models/User";
import _request from "../_request";

export type LoginReqParams = {
  phone: string;
  password: string;
};

type LoginResDate = {
  profile: UserProfile;
  cookie: string;
};

/**
 * 使用手机号 + 密码登录
 * @returns
 */
export async function loginReq(params: LoginReqParams) {
  const res = await _request<LoginResDate>({
    url: "/login/cellphone",
    method: "GET",
    params,
  });

  return res;
}
