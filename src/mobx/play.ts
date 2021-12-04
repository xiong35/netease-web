import { makeAutoObservable } from "mobx";

import { defaultMusic, Music, PlayMode } from "../models/Music";

class PlayState {
  curMusic = { ...defaultMusic };
  playList: Music[] = [];
  playMode = PlayMode.NORMAL;

  constructor() {
    makeAutoObservable(this);
  }
}

export const PlayStore = new PlayState();
