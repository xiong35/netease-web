import { useEffect, useState } from "react";

export function useIsPlaying(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!curAudioEl.current) return;
    if (isPlaying) curAudioEl.current.play();
    else curAudioEl.current.pause();
  }, [isPlaying, curAudioEl.current]);

  function togglePlaying() {
    setIsPlaying((p) => !p);
  }

  return { isPlaying, togglePlaying };
}
