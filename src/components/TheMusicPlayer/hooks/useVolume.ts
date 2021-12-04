import { useEffect, useState } from "react";

export function useVolume(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
) {
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    if (!curAudioEl.current) return;

    curAudioEl.current.volume = volume / 100;
  }, [volume, curAudioEl.current]);

  return { volume, setVolume };
}
