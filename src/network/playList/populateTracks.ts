import _request from "../_request";
import { MusicDetail } from "../../models/Music";

export type PopulateTracksReqData = {
  ids: number[];
};

/** 避免 url 过长要将 id 分片, 此为每片长度 */
const BATCH_SIZE = 777;

/**
 * 根据给定 id 数组获得这批音乐的详情(不包含 url)
 * @returns 详情数组
 */
export async function populateTracksReq({ ids }: PopulateTracksReqData) {
  const idBatches: number[][] = [];
  for (let i = 0; i * BATCH_SIZE < ids.length; i++) {
    idBatches.push(ids.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE));
  }
  const promises = idBatches.map((idBatch) =>
    _request<{ songs: MusicDetail[] }>({
      url: "/song/detail",
      method: "GET",
      params: {
        ids: idBatch.join(","),
      },
    })
  );

  try {
    const results = await Promise.all(promises);
    let returnArr: MusicDetail[] = [];
    for (const res of results) {
      if (!res || !res.songs) throw "error";
      returnArr = [...returnArr, ...res.songs];
    }

    return returnArr;
  } catch {
    return null;
  }
}
