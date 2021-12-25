import { PlayStore } from "../../../mobx/play";
import { populateTracksReq } from "../../../network/playList/populateTracks";

export const setCurSong = async (id: number) => {
  const detail = await populateTracksReq({ ids: [id] });
  if (!detail) return;
  PlayStore.setMusicsWithoutPlaylist([detail[0]]);
};
