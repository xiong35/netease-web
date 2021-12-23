import { useEffect, useState } from "react";

export function useIsPlaying(curAudioEl: HTMLAudioElement | null) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!curAudioEl) return;
    if (isPlaying) curAudioEl.play();
    else curAudioEl.pause();
  }, [isPlaying, curAudioEl]);

  function togglePlaying() {
    setIsPlaying((p) => !p);
  }

  return { isPlaying, togglePlaying, setIsPlaying };
}
