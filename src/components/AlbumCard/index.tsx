import "./index.scss";

import { useHistory } from "react-router-dom";

import { RecommendedPlaylist } from "../../models/Music";
import PlayIcon from "../../pages/Home/components/PlayIcon";
import { numFormat } from "../../utils/numFormat";
import Img from "../Img";

type AlbumCardProps = {
  playlist: RecommendedPlaylist;
};

function AlbumCard(props: AlbumCardProps) {
  const { playlist } = props;

  const history = useHistory();

  return (
    <div
      className="album_card"
      onClick={() => history.push(`album-detail?id=${playlist.id}`)}
    >
      <div className="album_card-cover">
        <Img
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
