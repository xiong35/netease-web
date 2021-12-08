import _request from "../_request";
import { MusicID } from "../../models/Music";

export type GetMusicUrlReqData = {
  id: MusicID;
};

/**
 * 根据传入 id 获得一首歌资源的 url
 * @returns url 或 null
 */
export async function getMusicUrlReq(
  params: GetMusicUrlReqData
): Promise<string | null> {
  const res = await _request<{
    data: {
      url: string;
    }[];
  }>({
    url: "/song/url",
    method: "GET",
    params,
  });

  console.log("# getMusicUrl", { res });

  if (!res || !res.data || !res.data.length) return null;

  return res.data[0].url;
}
