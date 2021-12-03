import { useEffect, useState } from "react";

export function useCurrentTime(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
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
  }, [curAudioEl.current && curAudioEl.current.currentSrc]);

  // 设置 time 一直自增
  // TODO pause 的时候停止
  useEffect(() => {
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
  }, []);

  return { currentTime, setCurrentTime };
}
