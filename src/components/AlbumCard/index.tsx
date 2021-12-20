import "./index.scss";

import { RecommendedMusic } from "../../models/Music";
import { numFormat } from "../../utils/numFormat";

type AlbumCardProps = {
  music: RecommendedMusic;
};

function AlbumCard(props: AlbumCardProps) {
  const { music } = props;

  return (
    <div className="album_card">
      <div className="album_card-cover">
        <img
          src={music.picUrl}
          alt={music.name}
          className="album_card-cover-img"
        />
        <div className="album_card-cover-play_count">
          ▶ {numFormat(music.playcount)}
        </div>
        <div className="album_card-cover-play_btn"></div>
      </div>

      <div className="album_card-name">{music.name}</div>
    </div>
  );
}

export default AlbumCard;
