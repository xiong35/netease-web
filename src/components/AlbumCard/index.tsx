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
        <div className="album_card-cover-play_btn">
          <svg
            className="album_card-cover-play_btn-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7367"
            width="200"
            height="200"
          >
            <path
              d="M912.724884 429.355681L208.797545 13.198638C151.603449-20.597874 64.01249 12.198741 64.01249 95.790112V927.904219c0 74.992259 81.391599 120.187594 144.785055 82.591475l703.927339-415.957064c62.793518-36.996181 62.993498-128.186768 0-165.182949z"
              fill=""
              p-id="7368"
            ></path>
          </svg>
        </div>
      </div>

      <div className="album_card-name">{music.name}</div>
    </div>
  );
}

export default AlbumCard;
