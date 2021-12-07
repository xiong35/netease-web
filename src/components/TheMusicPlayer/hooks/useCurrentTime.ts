import { useEffect, useRef, useState } from "react";

export function useCurrentTime(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>,
  isPlaying: boolean,
  url?: string
) {
  /** 当前播放进度(秒) */
  const [currentTime, _setCurrentTime] = useState(0);

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
  // TODO pause 的时候停止
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(
      () =>
        _setCurrentTime((t) => {
          if (curAudioEl.current) {
            return Math.min(curAudioEl.current.duration, t + 1);
          } else {
            return t + 1;
          }
        }),
      1000
    );

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
