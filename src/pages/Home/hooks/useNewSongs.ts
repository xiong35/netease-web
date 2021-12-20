import { useEffect, useState } from "react";

import { NewSong } from "../../../models/Home";
import { getNewSongReq } from "../../../network/home/getNewSong";

export function useNewSongs() {
  const [newSongs, setNewSongs] = useState<NewSong[] | null>(null);

  useEffect(() => {
    getNewSongReq().then(setNewSongs);
  }, []);

  return { newSongs };
}
