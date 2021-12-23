import { useEffect, useState } from "react";

import {
    searchByKeywordsReq, SearchByKeywordsReqData, SearchByKeywordsRes, SearchType
} from "../../../network/search/searchByKeywords";

export type UseSearchMusicProps = {
  tab: keyof typeof SearchType;
  params: SearchByKeywordsReqData;
};

export const useSearchMusic = (props: UseSearchMusicProps) => {
  const { params, tab } = props;
  const [searchRes, setSearchRes] = useState<SearchByKeywordsRes["result"]>({
    songCount: 0,
    songs: [],
  });

  const searchMusic = async () => {
    if (tab !== "单曲") return;
    const res = await searchByKeywordsReq(params);
    if (!res) return;
    setSearchRes(res.result);
  };

  useEffect(() => {
    searchMusic();
  }, [tab, params.keywords, params.offset]);

  return { songs: searchRes.songs, songCount: searchRes.songCount };
};
