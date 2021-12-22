import "./index.scss";

import { RecommendedPlaylist } from "../../models/Music";
import PlayIcon from "../../pages/Home/components/PlayIcon";
import { numFormat } from "../../utils/numFormat";

type AlbumCardProps = {
  playlist: RecommendedPlaylist;
};

function AlbumCard(props: AlbumCardProps) {
  const { playlist } = props;

  return (
    <div className="album_card">
      <div className="album_card-cover">
        <img
          src={playlist.picUrl}
          alt={playlist.name}
          className="album_card-cover-img"
        />
        <div className="album_card-cover-play_count">
          ▶ {numFormat(playlist.playcount)}
        </div>
        <PlayIcon></PlayIcon>
      </div>

      <div className="album_card-name">{playlist.name}</div>
    </div>
  );
}

export default AlbumCard;
