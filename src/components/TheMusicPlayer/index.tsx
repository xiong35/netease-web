import "./index.scss";

import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useVolume } from "./hooks/useVolume";
import { useMuted } from "./hooks/useMuted";
import { useIsPlaying } from "./hooks/useIsPlaying";
import { useCurrentTime } from "./hooks/useCurrentTime";
import { useColor } from "./hooks/useColor";
import {
    ImgLoop, ImgNext, ImgNormal, ImgPaused, ImgPlay, ImgPlayList, ImgPrev, ImgRand, ImgVolume,
    ImgVolumeMute
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

  const { isPlaying, togglePlaying } = useIsPlaying(audioRef, url);
  const { currentTime, duration, percent, slideRef, handleMouseEvent } =
    useCurrentTime(audioRef, isPlaying, url);
  const { muted, toggleMuted } = useMuted(audioRef);
  const { volume, handleVolumeMouseEvent, volumeSlideRef } =
    useVolume(audioRef);

  const { bgc, color, imgEl } = useColor(url);

  return (
    <div className="the_music_player t_m_p" style={{ background: bgc, color }}>
      <audio autoPlay ref={audioRef} src={url}></audio>

      <div className="t_m_p-album">
        <AlbumBrief imgRef={imgEl} music={PlayStore.curMusic}></AlbumBrief>
      </div>

      <div className="t_m_p-play">
        <div className="t_m_p-play-icons">
          {/* 最左边的播放模式按钮 */}
          <div
            className="t_m_p-icon mode"
            onClick={() => PlayStore.switchPlayMode()}
          >
            {PlayStore.playMode === PlayMode.LOOP ? (
              <ImgLoop color={color} className="t_m_p-icon-svg"></ImgLoop>
            ) : PlayStore.playMode === PlayMode.NORMAL ? (
              <ImgNormal color={color} className="t_m_p-icon-svg"></ImgNormal>
            ) : (
              <ImgRand color={color} className="t_m_p-icon-svg"></ImgRand>
            )}
          </div>
          {/* 切到前一首歌 */}
          <div
            className="t_m_p-icon prev"
            onClick={() => PlayStore.switchMusic("prev")}
          >
            <ImgPrev color={color} className="t_m_p-icon-svg"></ImgPrev>
          </div>
          {/* 播放 / 暂停 */}
          <div
            className="t_m_p-icon playstate"
            style={{ transform: "scale(1.2)" }}
            onClick={togglePlaying}
          >
            {isPlaying ? (
              <ImgPaused color={color} className="t_m_p-icon-svg"></ImgPaused>
            ) : (
              <ImgPlay color={color} className="t_m_p-icon-svg"></ImgPlay>
            )}
          </div>
          {/* 切到下一首歌 */}
          <div
            className="t_m_p-icon next"
            onClick={() => PlayStore.switchMusic("next")}
          >
            <ImgNext color={color} className="t_m_p-icon-svg"></ImgNext>
          </div>
          {/* 最右边的占位符 */}
          <div className="t_m_p-icon none"></div>
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
            <div className="t_m_p-play-bar-slide-full"></div>
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
        <div className="t_m_p-actions-volume t_m_p-icon" onClick={toggleMuted}>
          {muted ? (
            <ImgVolumeMute
              className="t_m_p-icon-svg"
              color={color}
            ></ImgVolumeMute>
          ) : (
            <ImgVolume className="t_m_p-icon-svg" color={color}></ImgVolume>
          )}
          <div
            className="t_m_p-actions-volume-control"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="t_m_p-actions-volume-control-slide"
              ref={volumeSlideRef}
              onClick={(e) => {
                if (muted) toggleMuted();
                handleVolumeMouseEvent(e);
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                document.addEventListener("mousemove", handleVolumeMouseEvent);
                document.addEventListener(
                  "mouseup",
                  () => {
                    document.removeEventListener(
                      "mousemove",
                      handleVolumeMouseEvent
                    );
                  },
                  { once: true }
                );
              }}
            >
              <div className="t_m_p-actions-volume-control-slide-full"></div>
              <div
                className="t_m_p-actions-volume-control-slide-done"
                style={{ height: `${muted ? "0" : volume}%` }}
              >
                <div className="t_m_p-actions-volume-control-slide-done-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="t_m_p-actions-play_list t_m_p-icon">
          <ImgPlayList className="t_m_p-icon-svg" color={color}></ImgPlayList>
        </div>
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
