import "./index.scss";

import { observer } from "mobx-react-lite";

import { PlayStore } from "../../../../mobx/play";
import { songsInfoFormat } from "../../../../utils/songsInfoFormat";
import SongsList from "../../../SongsList";

type AsidePlaylistProps = {
  show: boolean;
};

function _AsidePlaylist(props: AsidePlaylistProps) {
  const { show } = props;

  const playlist = PlayStore.tracks;
  const playListID = PlayStore.playlistID || 0;

  return (
    <div className={`aside_playlist ${show ? "" : "hide"}`}>
      {playlist.length === 0 ? (
        <div>没有歌曲呢</div>
      ) : (
        <SongsList
          tableContents={songsInfoFormat(playlist)}
          tableHeads={["音乐标题", "专辑", "时长"]}
          playlistID={playListID}
        ></SongsList>
      )}
    </div>
  );
}

const AsidePlaylist = observer(_AsidePlaylist);

export default AsidePlaylist;
