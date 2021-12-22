import { useEffect, useState } from "react";

import { RecommendedPlaylist } from "../../../models/Music";
import { getRecommendedPlayListReq } from "../../../network/home/getRecommendedPlayList";

export function useRecommendedMusic() {
  const [recommendMusic, setRecommendMusic] = useState<
    RecommendedPlaylist[] | null
  >(null);

  useEffect(() => {
    getRecommendedPlayListReq().then(setRecommendMusic);
  }, []);

  return { recommendMusic };
}
