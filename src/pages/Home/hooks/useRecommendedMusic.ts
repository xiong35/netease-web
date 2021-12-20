import { useEffect, useState } from "react";

import { RecommendedMusic } from "../../../models/Music";
import { getRecommendedPlayListReq } from "../../../network/home/getRecommendedPlayList";

export function useRecommendedMusic() {
  const [recommendMusic, setRecommendMusic] = useState<
    RecommendedMusic[] | null
  >(null);

  useEffect(() => {
    getRecommendedPlayListReq().then(setRecommendMusic);
  }, []);

  return { recommendMusic };
}
