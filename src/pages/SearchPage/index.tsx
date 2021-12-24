import "./index.scss";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import Pager from "../../components/Pager";
import PlayList from "../../components/PlayList";
import SongsList from "../../components/SongsList";
import { KEYWORDS } from "../../constants/search";
import { useQuery } from "../../hooks/useQuery";
import { SearchType } from "../../network/search/searchByKeywords";
import { songsInfoFormat } from "../../utils/songsInfoFormat";
import { useSearchMusic } from "./hooks/useSearchMusic";
import { useSearchPlayLists } from "./hooks/useSearchPlayLists";

type Query = {
  [KEYWORDS]: string;
  tab: keyof typeof SearchType;
};

const tabs = ["单曲", "歌单", "用户"];

function SearchPage() {
  const query = useQuery<Query>();
  const keywords = query.get(KEYWORDS);
  const tab = query.get("tab") || "单曲";
  const [page, setPage] = useState(1);

  const history = useHistory();

  const searchProps = { tab, keywords, page };

  const { songCount, songs } = useSearchMusic(searchProps);
  const { playlistCount, playlists } = useSearchPlayLists(searchProps);

  console.log({ playlistCount, playlists });

  return (
    <div className="search_page">
      <div className="search_page-count">找到{songCount}首单曲</div>
      <div className="search_page-tabs">
        {tabs.map((tabItem) => (
          <div
            key={tabItem}
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
      {tab === "单曲" && (
        <SongsList
          tableHeads={["音乐标题", "歌手", "专辑", "时长"]}
          highlightWord={keywords}
          tableContents={songsInfoFormat(songs)}
          indexed
        />
      )}
      {tab === "歌单" &&
        playlists.map((list) => <PlayList {...list} key={list.id} />)}
      <Pager
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(songCount / 100)}
      />
    </div>
  );
}

export default SearchPage;
