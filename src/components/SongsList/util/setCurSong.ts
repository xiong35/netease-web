import { PlayStore } from "../../../mobx/play";
import { MusicID } from "../../../models/Music";
import { PlayListID } from "../../../models/PlayList";
import { populateTracksReq } from "../../../network/playList/populateTracks";

export const setCurSong = async (songID: MusicID, playlistID?: PlayListID) => {
  if (playlistID) {
    PlayStore.setPlayListNMusic(playlistID, songID);
  } else {
    const detail = await populateTracksReq({ ids: [songID] });
    if (!detail) return;
    PlayStore.setMusicsWithoutPlaylist([detail[0]]);
  }
};
