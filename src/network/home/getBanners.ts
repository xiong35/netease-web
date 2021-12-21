import _request from "../_request";
import { Banner } from "../../models/Home";

/**
 * 获得首页轮播图
 */
export async function getBannersReq() {
  const res = await _request<{ banners: Banner[] }>({
    url: "/banner",
    method: "GET",
  });

  if (!res || !res.banners) return null;

  return res.banners;
}
