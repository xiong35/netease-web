import "./index.scss";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

// import { useVolume } from "./hooks/useVolume";
// import { useMuted } from "./hooks/useMuted";
import { useIsPlaying } from "./hooks/useIsPlaying";
import { useCurrentTime } from "./hooks/useCurrentTime";
import {
    ImgLoop, ImgNext, ImgNormal, ImgPaused, ImgPlay, ImgPrev, ImgRand
} from "./components/ImgComp";
import AlbumBrief from "../AlbumBrief";
import { timeFormat } from "../../utils/timeFormat";
import { PlayMode } from "../../models/Music";
import { PlayStore } from "../../mobx/play";

// import { PlayStore } from "../../mobx/play";

// type TheMusicPlayerProps = {
//   src?: string;
// };

function _TheMusicPlayer(/* props: TheMusicPlayerProps */) {
  // const {
  //   src = "http://192.168.11.175/m7.music.126.net/20211203210431/8d3ed597b681510c1da8c0d7a5eb3ea9/ymusic/b3de/76f4/6e13/659fd75ca5fa5a19c28f1907b6b1066e.mp3",
  // } = props;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    PlayStore.setPlayList(24381616);
  }, []);

  const { currentTime, duration, percent, slideRef, handleMouseEvent } =
    useCurrentTime(audioRef);
  const { isPlaying, togglePlaying } = useIsPlaying(audioRef);
  // const { muted, setMuted } = useMuted(audioRef);
  // const { volume, setVolume } = useVolume(audioRef);

  const color = "var(--on-bg)";

  return (
    <div className="the_music_player t_m_p">
      <audio ref={audioRef} src={PlayStore.curMusic.url}></audio>

      <div className="t_m_p-album">
        <AlbumBrief music={PlayStore.curMusic}></AlbumBrief>
      </div>

      <div className="t_m_p-play">
        <div className="t_m_p-play-icons">
          <div
            className="t_m_p-play-icons-item mode"
            onClick={() => PlayStore.switchPlayMode()}
          >
            {PlayStore.playMode === PlayMode.LOOP ? (
              <ImgLoop
                color={color}
                className="t_m_p-play-icons-item-svg"
              ></ImgLoop>
            ) : PlayStore.playMode === PlayMode.NORMAL ? (
              <ImgNormal
                color={color}
                className="t_m_p-play-icons-item-svg"
              ></ImgNormal>
            ) : (
              <ImgRand
                color={color}
                className="t_m_p-play-icons-item-svg"
              ></ImgRand>
            )}
          </div>
          <div
            className="t_m_p-play-icons-item prev"
            onClick={() => PlayStore.switchMusic("prev")}
          >
            <ImgPrev
              color={color}
              className="t_m_p-play-icons-item-svg"
            ></ImgPrev>
          </div>
          <div
            className="t_m_p-play-icons-item t_m_p-play-icons-item-mid playstate"
            onClick={togglePlaying}
          >
            {isPlaying ? (
              <ImgPaused
                color={color}
                className="t_m_p-play-icons-item-svg"
              ></ImgPaused>
            ) : (
              <ImgPlay
                color={color}
                className="t_m_p-play-icons-item-svg"
              ></ImgPlay>
            )}
          </div>
          <div
            className="t_m_p-play-icons-item next"
            onClick={() => PlayStore.switchMusic("next")}
          >
            <ImgNext
              color={color}
              className="t_m_p-play-icons-item-svg"
            ></ImgNext>
          </div>
          <div className="t_m_p-play-icons-item none"></div>
        </div>

        <div className="t_m_p-play-bar">
          <div className="t_m_p-play-bar-cur_time">
            {timeFormat(currentTime)}
          </div>
          <div
            className="t_m_p-play-bar-slide"
            ref={slideRef}
            onClick={handleMouseEvent}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              document.addEventListener("mousemove", handleMouseEvent);
              document.addEventListener(
                "mouseup",
                () => {
                  document.removeEventListener("mousemove", handleMouseEvent);
                },
                { once: true }
              );
            }}
          >
            <div
              className="t_m_p-play-bar-slide-done"
              style={{ width: `${percent}%` }}
            >
              <div className="t_m_p-play-bar-slide-done-dot"></div>
            </div>
          </div>
          <div className="t_m_p-play-bar-duration">{timeFormat(duration)}</div>
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
