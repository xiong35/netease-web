import "./index.scss";

import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Pager from "../../components/Pager";
import PlayList from "../../components/PlayList";
import SongsList from "../../components/SongsList";
import UserItem from "../../components/UserItem";
import { KEYWORDS } from "../../constants/search";
import { useQuery } from "../../hooks/useQuery";
import { SearchType } from "../../network/search/searchByKeywords";
import { songsInfoFormat } from "../../utils/songsInfoFormat";
import { useSearchMusic } from "./hooks/useSearchMusic";
import { useSearchPlayLists } from "./hooks/useSearchPlayLists";
import { useSearchUsers } from "./hooks/useSearchUser";

type Query = {
  [KEYWORDS]: string;
  tab: keyof typeof SearchType;
};

const tabs = ["单曲", "歌单", "用户"];

function SearchPage() {
  const query = useQuery<Query>();
  const keywords = query.get(KEYWORDS);
  const tab = query.get("tab") || "单曲";
  const [page, _setPage] = useState(1);

  const history = useHistory();

  const searchProps = { tab, keywords, page };

  const { songCount, songs } = useSearchMusic(searchProps);
  const { playlistCount, playlists } = useSearchPlayLists(searchProps);
  const { userprofileCount, userprofiles } = useSearchUsers(searchProps);

  const top = useRef<HTMLDivElement>(null);

  const setPage = (newPage: number) => {
    if (top && top.current) top.current.scrollIntoView();
    _setPage(newPage);
  };

  const totalCount = {
    [tabs[0]]: songCount,
    [tabs[1]]: playlistCount,
    [tabs[2]]: userprofileCount,
  };

  return (
    <div className="search_page">
      <div className="search_page-count" ref={top}>
        找到{totalCount[tab]}个{tab}
      </div>
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
      {tab === "用户" &&
        userprofiles.map((user) => <UserItem {...user} key={user.userId} />)}
      <Pager
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(totalCount[tab] / 100)}
      />
    </div>
  );
}

export default SearchPage;
