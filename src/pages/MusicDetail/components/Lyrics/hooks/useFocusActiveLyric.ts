import { useEffect, useState } from "react";

import { useForceUpdate } from "../../../../../hooks/useForceUpdate";
import { PlayingMusicStore } from "../../../../../mobx/playingMusic";
import { Lyric } from "../../../../../models/lyric";

export function useFocusActiveLyric(lyric: Lyric[]) {
  const [marginTop, setMarginTop] = useState(0);

  const { forceUpdate } = useForceUpdate();

  useEffect(() => {
    const timer = setInterval(() => {
      const time = PlayingMusicStore.getCurrentTime();

      const active = [...lyric].reverse().find((l) => l.startSec <= time);

      forceUpdate();
      if (!active || !active.ref) return;

      setMarginTop(-active.ref.offsetTop);
    }, 500);

    return () => clearInterval(timer);
  }, [lyric]);

  return { marginTop };
}
