import { PlayMode } from "../../models/Music";

export function initPlayState() {
  return loadLocal();
}

type LocalPlayState = {
  curMusicId: number;
  curPlayListID: number;
  curPlayMode: PlayMode;
};

const defaultLocalPlayState: LocalPlayState = {
  curMusicId: 1338149101,
  curPlayListID: 2839545331,
  curPlayMode: PlayMode.NORMAL,
};

const KEY = "netease-f-play_state";

function loadLocal() {
  const localData = localStorage.getItem(KEY);
  if (!localData) {
    return defaultLocalPlayState;
  } else {
    const playState = JSON.parse(localData as string) as LocalPlayState;

    if (playState.curMusicId && playState.curPlayListID) return playState;
    else return defaultLocalPlayState;
  }
}

export function savePlayStateToLocal(partOfState: Partial<LocalPlayState>) {
  const oldState = loadLocal();

  const newState = { ...oldState, ...partOfState };

  localStorage.setItem(KEY, JSON.stringify(newState));
}
