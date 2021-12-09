import { useEffect, useState } from "react";

export function useMuted(
  curAudioEl: React.MutableRefObject<HTMLAudioElement | null>
) {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!curAudioEl.current) return;

    curAudioEl.current.muted = muted;
  }, [muted, curAudioEl.current]);

  function toggleMuted() {
    setMuted((m) => !m);
  }

  return { muted, toggleMuted };
}
