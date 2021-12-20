import { Personalized } from "../../models/Home";
import _request from "../_request";

/**
 * 获得首页独家放送 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e7%8b%ac%e5%ae%b6%e6%94%be%e9%80%81%e5%85%a5%e5%8f%a3%e5%88%97%e8%a1%a8
 * @returns
 */
export async function getPersonalizeReq() {
  const res = await _request<{ result: Personalized[] }>({
    url: "/personalized/privatecontent",
    method: "GET",
  });

  if (!res || !res.result) return null;

  return res.result;
}
