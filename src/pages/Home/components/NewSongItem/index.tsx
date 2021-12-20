import "./index.scss";

import Img from "../../../../components/Img";
import { NewSong } from "../../../../models/Home";

type NewSongItemProps = {
  song: NewSong;
};

function NewSongItem(props: NewSongItemProps) {
  const { song } = props.song;

  return (
    <div className="new_song_item n_s_i">
      <Img
        src={song.album.blurPicUrl}
        alt={song.album.name}
        className="n_s_i-cover"
      ></Img>
      <div className="n_s_i-info">
        <div className="n_s_i-info-name elipsis">
          {song.name}
          <span className="n_s_i-info-name-alias">{song.alias.join("/")}</span>
        </div>
        <div className="n_s_i-info-artist_name elipsis">
          {song.artists.map((artist) => artist.name).join("/")}
        </div>
      </div>
    </div>
  );
}

export default NewSongItem;
