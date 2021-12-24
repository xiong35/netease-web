import { useEffect, useState } from "react";

import {
    searchByKeywordsReq, SearchRes, SearchType
} from "../../../network/search/searchByKeywords";

type UseSearchMusicProps = {
  tab: keyof typeof SearchType;
  keywords: string;
  page: number;
};

const LIMIT = 100;

export const useSearchMusic = (props: UseSearchMusicProps) => {
  const { tab, keywords, page } = props;

  const [searchRes, setSearchRes] = useState<
    SearchRes<SearchType.单曲>["result"]
  >({
    songCount: 0,
    songs: [],
  });

  const searchMusic = async () => {
    if (tab !== "单曲") return;
    const res = await searchByKeywordsReq({
      keywords,
      limit: LIMIT,
      offset: LIMIT * (page - 1),
      type: SearchType[tab],
    });
    if (!res) return;
    setSearchRes(res.result);
  };

  useEffect(() => {
    searchMusic();
  }, [tab, keywords, page]);

  return { songs: searchRes.songs, songCount: searchRes.songCount };
};
