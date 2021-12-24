import "./index.scss";

import Img from "../../../../components/Img";
import { PlayStore } from "../../../../mobx/play";
import { NewSong } from "../../../../models/Home";

type NewSongItemProps = {
  song: NewSong;
};

function NewSongItem(props: NewSongItemProps) {
  const { song } = props.song;

  return (
    <div
      className="new_song_item n_s_i"
      onClick={() =>
        PlayStore.setMusicsWithoutPlaylist([
          {
            ...song,
            al: { ...song.album, picUrl: song.album.blurPicUrl },
            alia: song.alias,
            ar: song.artists,
            dt: Date.now(),
            publishTime: Date.now(),
          },
        ])
      }
    >
      <Img
        src={song.album.blurPicUrl}
        alt={song.album.name}
        className="n_s_i-cover"
      ></Img>
      <div className="n_s_i-info">
        <div className="n_s_i-info-name ellipsis">
          {song.name}
          <span className="n_s_i-info-name-alias">{song.alias.join("/")}</span>
        </div>
        <div className="n_s_i-info-artist_name ellipsis">
          {song.artists.map((artist) => artist.name).join("/")}
        </div>
      </div>
    </div>
  );
}

export default NewSongItem;
