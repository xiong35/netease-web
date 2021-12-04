import { useEffect, useState } from "react";

export function useIsPlaying(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!curAudioEl.current) return;
    if (isPlaying) curAudioEl.current.play();
    else curAudioEl.current.pause();
  }, [isPlaying]);

  return { isPlaying, setIsPlaying };
}
