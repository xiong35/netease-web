import { useEffect, useRef, useState } from "react";

export function useVolume(curAudioEl: HTMLAudioElement | null) {
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    if (!curAudioEl) return;

    curAudioEl.volume = volume / 100;
  }, [volume, curAudioEl]);

  const volumeSlideRef = useRef<HTMLDivElement>(null);
  const handleVolumeMouseEvent = (e: { clientY: number }) => {
    if (!volumeSlideRef.current) return;
    const rect = volumeSlideRef.current.getBoundingClientRect();
    let percent = (rect.bottom - e.clientY) / rect.height;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;

    setVolume(percent * 100);
  };

  return { volume, handleVolumeMouseEvent, volumeSlideRef };
}
