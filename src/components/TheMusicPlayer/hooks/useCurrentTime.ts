import { useEffect, useRef, useState } from "react";

import { PlayStore } from "../../../mobx/play";
import { PlayingMusicStore } from "../../../mobx/playingMusic";
import { PlayMode } from "../../../models/Music";

export function useCurrentTime(
  curAudioEl: HTMLAudioElement | null,
  setIsPlaying: (play: boolean) => void,
  isPlaying: boolean,
  url?: string
) {
  const [_, _setForUpdate] = useState(false);
  function forceUpdate() {
    _setForUpdate((b) => !b);
  }

  /** 当前播放进度(秒) */
  const currentTime = PlayingMusicStore.getCurrentTime();

  function setCurrentTime(time: number) {
    PlayingMusicStore.currentTime = time;
  }

  // 切歌的时候重置时间
  useEffect(() => {
    setCurrentTime(0);
  }, [curAudioEl && curAudioEl.currentSrc, url]);

  // 设置 time 一直自增
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      forceUpdate();
      if (!curAudioEl) return;
      const time = curAudioEl.currentTime;

      if (time >= curAudioEl.duration) {
        if (PlayStore.playMode !== PlayMode.LOOP) {
          PlayStore.switchMusic("next").then(() => {
            setCurrentTime(0);
            setIsPlaying(true);
          });
          setIsPlaying(false);
        } else {
          // 单曲循环下需要重置播放器播放时间
          setCurrentTime(0);
          curAudioEl.play();
        }
        forceUpdate();
      }
    }, 500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const duration = (curAudioEl && curAudioEl.duration) || 0.1;

  let percent = (currentTime * 100) / duration;
  if (percent > 100) percent = 100;
  else if (percent < 0) percent = 0;
  if (duration < 1) percent = 0;

  const slideRef = useRef<HTMLDivElement>(null);
  const handleMouseEvent = (e: { clientX: number }) => {
    if (!slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    let percent = (e.clientX - rect.left) / rect.width;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;

    setCurrentTime(percent * duration);
    forceUpdate();
  };

  return {
    currentTime,
    percent,
    duration,
    handleMouseEvent,
    slideRef,
  };
}
