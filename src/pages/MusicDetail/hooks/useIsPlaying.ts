import { useEffect, useState } from "react";

import { useForceUpdate } from "../../../hooks/useForceUpdate";
import { PlayingMusicStore } from "../../../mobx/playingMusic";

export function useIsPlaying() {
  const { forceUpdate } = useForceUpdate();
  useEffect(() => {
    const timer = setInterval(forceUpdate, 500);
    return () => clearInterval(timer);
  }, []);

  const isPlaying = !(
    PlayingMusicStore.audioRef && PlayingMusicStore.audioRef.paused
  );

  return { isPlaying };
}
