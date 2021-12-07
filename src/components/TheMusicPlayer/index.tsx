import "./index.scss";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

// import { useVolume } from "./hooks/useVolume";
// import { useMuted } from "./hooks/useMuted";
// import { useIsPlaying } from "./hooks/useIsPlaying";
// import { useCurrentTime } from "./hooks/useCurrentTime";
import AlbumBrief from "../AlbumBrief";
import { PlayStore } from "../../mobx/play";

// import { PlayStore } from "../../mobx/play";

type TheMusicPlayerProps = {
  src?: string;
};

function _TheMusicPlayer(props: TheMusicPlayerProps) {
  const {
    src = "http://192.168.11.175/m7.music.126.net/20211203210431/8d3ed597b681510c1da8c0d7a5eb3ea9/ymusic/b3de/76f4/6e13/659fd75ca5fa5a19c28f1907b6b1066e.mp3",
  } = props;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    PlayStore.setPlayList(24381616);
  }, []);

  // const { currentTime, setCurrentTime } = useCurrentTime(audioRef);
  // const { isPlaying, setIsPlaying } = useIsPlaying(audioRef);
  // const { muted, setMuted } = useMuted(audioRef);
  // const { volume, setVolume } = useVolume(audioRef);

  return (
    <div className="the_music_player t_m_p">
      <audio ref={audioRef} src={src}></audio>

      <div className="t_m_p-album">
        <AlbumBrief music={PlayStore.curMusic}></AlbumBrief>
      </div>

      <div className="t_m_p-play">
        <div className="t_m_p-play-icons">
          <div className="t_m_p-play-icons-loop">loop</div>
          <div className="t_m_p-play-icons-post">post</div>
          <div className="t_m_p-play-icons-pause">pause</div>
          <div className="t_m_p-play-icons-next">next</div>
          <div className="t_m_p-play-icons-ph">ph</div>
        </div>

        <div className="t_m_p-play-bar">
          <div className="t_m_p-play-bar-cur_time">cur_time</div>
          <div className="t_m_p-play-bar-slide">slide</div>
          <div className="t_m_p-play-bar-duration">duration</div>
        </div>
      </div>

      <div className="t_m_p-actions">
        <div className="t_m_p-actions-volume">volume</div>
        <div className="t_m_p-actions-play_list">play_list</div>
      </div>

      {/* <button onClick={() => setIsPlaying((p) => !p)}>setIsPlaying</button>
      <button onClick={() => setMuted((p) => !p)}>setMuted</button>
      <input
        type="range"
        value={volume}
        onChange={(e) => setVolume(parseInt(e.target.value))}
      />
      <input
        type="range"
        onChange={(e) => {
          if (!audioRef.current) return;

          const percent = parseInt(e.target.value) || 0;
          setCurrentTime(audioRef.current.duration * 0.01 * percent);
        }}
      /> */}
    </div>
  );
}

const TheMusicPlayer = observer(_TheMusicPlayer);

export default TheMusicPlayer;
