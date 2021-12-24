import { useEffect, useState } from "react";

import {
    searchByKeywordsReq, SearchRes, SearchType
} from "../../../network/search/searchByKeywords";

type UseSearchUsersProps = {
  tab: keyof typeof SearchType;
  keywords: string;
  page: number;
};

const LIMIT = 20;

export const useSearchUsers = (props: UseSearchUsersProps) => {
  const { tab, keywords, page } = props;

  const [searchRes, setSearchRes] = useState<
    SearchRes<SearchType.用户>["result"]
  >({
    userprofileCount: 0,
    userprofiles: [],
  });

  const searchUsers = async () => {
    if (tab !== "用户") return;
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
    searchUsers();
  }, [tab, keywords, page]);

  return { ...searchRes };
};
