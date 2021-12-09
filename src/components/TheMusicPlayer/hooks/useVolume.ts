import { useEffect, useRef, useState } from "react";

export function useVolume(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
) {
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    if (!curAudioEl.current) return;

    console.log("# useVolume", { volume });
    curAudioEl.current.volume = volume / 100;
  }, [volume, curAudioEl.current]);

  const volumeSlideRef = useRef<HTMLDivElement>(null);
  const handleVolumeMouseEvent = (e: { clientY: number }) => {
    if (!volumeSlideRef.current) return;
    const rect = volumeSlideRef.current.getBoundingClientRect();
    let percent = (rect.bottom - e.clientY) / rect.height;
    console.log("# useVolume", { percent });
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;

    setVolume(percent * 100);
  };

  return { volume, handleVolumeMouseEvent, volumeSlideRef };
}
