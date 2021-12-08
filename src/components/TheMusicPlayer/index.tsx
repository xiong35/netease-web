import "./index.scss";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

// import { useVolume } from "./hooks/useVolume";
// import { useMuted } from "./hooks/useMuted";
import { useIsPlaying } from "./hooks/useIsPlaying";
import { useCurrentTime } from "./hooks/useCurrentTime";
import { useColor } from "./hooks/useColor";
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
  const { url } = PlayStore.curMusic;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    PlayStore.setPlayList(24381616);
  }, []);

  const { isPlaying, togglePlaying } = useIsPlaying(audioRef);
  const { currentTime, duration, percent, slideRef, handleMouseEvent } =
    useCurrentTime(audioRef, isPlaying, url);
  // const { muted, setMuted } = useMuted(audioRef);
  // const { volume, setVolume } = useVolume(audioRef);

  const { bgc, color, imgEl } = useColor(url);

  return (
    <div className="the_music_player t_m_p" style={{ background: bgc, color }}>
      <audio autoPlay ref={audioRef} src={url}></audio>

      <div className="t_m_p-album">
        <AlbumBrief imgRef={imgEl} music={PlayStore.curMusic}></AlbumBrief>
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
          <div className="t_m_p-play-bar-cur_time t-l lh-0">
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
              style={{ width: `${percent}%`, color }}
            >
              <div className="t_m_p-play-bar-slide-done-dot"></div>
            </div>
          </div>
          <div className="t_m_p-play-bar-duration t-l lh-0">
            {timeFormat(duration)}
          </div>
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
