import "./index.scss";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import Pager from "../../components/Pager";
import SongsList from "../../components/SongsList";
import { KEYWORDS } from "../../constants/search";
import { useQuery } from "../../hooks/useQuery";
import { SearchType } from "../../network/search/searchByKeywords";
import { songsInfoFormat } from "../../utils/songsInfoFormat";
import { useSearchMusic } from "./hooks/useSearchMusic";

type Query = {
  [KEYWORDS]: string;
  tab: keyof typeof SearchType;
};

const LIMIT = 100;

const tabs = ["单曲", "歌单", "用户"];

function SearchPage() {
  const query = useQuery<Query>();
  const keywords = query.get(KEYWORDS);
  const tab = query.get("tab") || "单曲";
  const [page, setPage] = useState(1);

  const history = useHistory();

  const { songCount, songs } = useSearchMusic({
    tab,
    params: {
      keywords,
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      type: SearchType[tab],
    },
  });

  return (
    <div className="search_page">
      <div className="search_page-count">找到{songCount}首单曲</div>
      <div className="search_page-tabs">
        {tabs.map((tabItem) => (
          <div
            className={
              "search_page-tabs-tab" + (tabItem === tab ? " selected" : "")
            }
            onClick={() =>
              history.replace(
                `/search-page?tab=${tabItem}&keywords=${keywords}`
              )
            }
          >
            {tabItem}
          </div>
        ))}
      </div>
      <SongsList
        tableHeads={["音乐标题", "歌手", "专辑", "时长"]}
        highlightWord={keywords}
        tableContents={songsInfoFormat(songs)}
      />
      <Pager
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(songCount / 100)}
      />
    </div>
  );
}

export default SearchPage;
