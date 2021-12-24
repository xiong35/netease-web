import { useEffect, useState } from "react";

import {
    searchByKeywordsReq, SearchRes, SearchType
} from "../../../network/search/searchByKeywords";

type UseSearchPlayListsProps = {
  tab: keyof typeof SearchType;
  keywords: string;
  page: number;
};

const LIMIT = 20;

export const useSearchPlayLists = (props: UseSearchPlayListsProps) => {
  const { tab, keywords, page } = props;

  const [searchRes, setSearchRes] = useState<
    SearchRes<SearchType.歌单>["result"]
  >({
    playlistCount: 0,
    playlists: [],
  });

  const searchPlayLists = async () => {
    if (tab !== "歌单") return;
    const res = await searchByKeywordsReq({
      keywords,
      limit: LIMIT,
      offset: LIMIT * page,
      type: SearchType[tab],
    });
    if (!res) return;
    setSearchRes(res.result);
  };

  useEffect(() => {
    searchPlayLists();
  }, [tab, keywords, page]);

  return { ...searchRes };
};
