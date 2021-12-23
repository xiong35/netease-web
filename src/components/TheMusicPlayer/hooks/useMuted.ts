import { useEffect, useState } from "react";

export function useMuted(curAudioEl: HTMLAudioElement | null) {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!curAudioEl) return;

    curAudioEl.muted = muted;
  }, [muted, curAudioEl]);

  function toggleMuted() {
    setMuted((m) => !m);
  }

  return { muted, toggleMuted };
}
