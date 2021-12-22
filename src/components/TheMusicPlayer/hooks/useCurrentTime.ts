import { useEffect, useRef, useState } from "react";

import { PlayStore } from "../../../mobx/play";
import { PlayMode } from "../../../models/Music";

export function useCurrentTime(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>,
  isPlaying: boolean,
  url?: string
) {
  /** 当前播放进度(秒) */
  const [currentTime, _setCurrentTime] = useState(0);
  const timeRef = useRef(0);
  timeRef.current = currentTime;

  function setCurrentTime(time: number) {
    time = Math.floor(time);
    _setCurrentTime(time);
    if (curAudioEl.current) curAudioEl.current.currentTime = time;
  }

  // 切歌的时候重置时间
  useEffect(() => {
    setCurrentTime(0);
  }, [curAudioEl.current && curAudioEl.current.currentSrc, url]);

  // 设置 time 一直自增
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const nextT = timeRef.current + 1;
      if (!curAudioEl.current) return _setCurrentTime(nextT);

      if (nextT > curAudioEl.current.duration) {
        if (PlayStore.playMode !== PlayMode.LOOP) {
          PlayStore.switchMusic("next");
        } else {
          // 单曲循环下需要重置播放器播放时间
          curAudioEl.current.currentTime = 0;
          curAudioEl.current.play();
        }
        return _setCurrentTime(0);
      } else {
        _setCurrentTime(nextT);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const duration = (curAudioEl.current && curAudioEl.current.duration) || 0.1;

  let percent = (currentTime * 100) / duration;
  if (percent > 100) percent = 100;
  else if (percent < 0) percent = 0;

  const slideRef = useRef<HTMLDivElement>(null);
  const handleMouseEvent = (e: { clientX: number }) => {
    if (!slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    let percent = (e.clientX - rect.left) / rect.width;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;

    setCurrentTime(percent * duration);
  };

  return {
    currentTime,
    percent,
    duration,
    handleMouseEvent,
    slideRef,
  };
}
