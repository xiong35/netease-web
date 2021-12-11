import { useEffect, useState } from "react";

export function useIsPlaying(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>,
  url?: string
) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!curAudioEl.current) return;
    if (isPlaying) curAudioEl.current.play();
    else curAudioEl.current.pause();
  }, [isPlaying, url]);

  function togglePlaying() {
    setIsPlaying((p) => !p);
  }

  return { isPlaying, togglePlaying };
}
