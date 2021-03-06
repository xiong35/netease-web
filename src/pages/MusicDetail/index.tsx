import "./index.scss";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import Img from "../../components/Img";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { PlayStore } from "../../mobx/play";
import { PlayingMusicStore } from "../../mobx/playingMusic";
import Lyric from "./components/Lyrics";
import MusicComments from "./components/MusicComments";
import { useIsPlaying } from "./hooks/useIsPlaying";

// type MusicDetailProps = {
// };

function _MusicDetail(/* props: MusicDetailProps */) {
  // const {} = props;
  const music = PlayStore.curMusic;

  const { isPlaying } = useIsPlaying();

  return (
    <div className="music_detail">
      <div className="music_detail-title">
        <div className="music_detail-title-music_name">{music.name}</div>
        <div className="music_detail-title-artist_name">
          {music.ar.map((ar) => ar.name).join("/")}
        </div>
      </div>
      <div className="music_detail-song">
        <div className="music_detail-song-disc">
          <div
            className={`music_detail-song-disc-cover ${
              isPlaying ? "" : "paused"
            }`}
          >
            <Img
              src={music.al.picUrl}
              className="music_detail-song-disc-cover-img"
              alt={music.al.name}
            ></Img>
          </div>
        </div>

        <Lyric lyric={PlayingMusicStore.lyric}></Lyric>
      </div>

      <MusicComments musicID={music.id}></MusicComments>
    </div>
  );
}

const MusicDetail = observer(_MusicDetail);

export default MusicDetail;
