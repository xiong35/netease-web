import "./index.scss";

import { useState } from "react";

import Pager from "../../components/Pager";
import { KEYWORDS } from "../../constants/search";
import { useQuery } from "../../hooks/useQuery";
import { SearchType } from "../../network/search/searchByKeywords";
import { useSearchMusic } from "./hooks/useSearchMusic";

type Query = {
  [KEYWORDS]: string;
  tab: keyof typeof SearchType;
};

const LIMIT = 100;

function SearchPage() {
  const query = useQuery<Query>();
  const keywords = query.get(KEYWORDS);
  const tab = query.get("tab") || "单曲";
  const [page, setPage] = useState(1);

  const { songCount, songs } = useSearchMusic({
    tab,
    params: {
      keywords,
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      type: SearchType[tab],
    },
  });

  console.log({ songs, songCount });

  return (
    <div className="search_page">
      SearchPage
      <Pager
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(songCount / 100)}
      />
    </div>
  );
}

export default SearchPage;
