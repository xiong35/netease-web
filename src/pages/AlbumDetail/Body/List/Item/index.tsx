import heart from "../../../images/heart.svg";
import download from "../../../images/download.svg";
import { timeFormat } from "../../../../../utils/timeFormat";
import { MusicDetail } from "../../../../../models/Music";

type itemProps = {
  song: MusicDetail;
  index: number;
};

function Item(props: itemProps) {
  const curSong = props.song;
  const arNameArr: string[] = [];
  curSong.ar.forEach((item) => {
    arNameArr.push(item.name);
  });

  return (
    <div className="album_detail-body-list-item">
      <div className="album_detail-body-list-item-count">
        {props.index + 1 < 10 ? "0" + (props.index + 1) : props.index + 1}
      </div>
      <div className="album_detail-body-list-item-operation">
        <img
          src={heart}
          className="album_detail-body-list-item-operation-like icon"
        />
        <img
          src={download}
          className="album_detail-body-list-item-operation-download icon"
        />
      </div>
      <div className="album_detail-body-list-item-title">
        <span className="album_detail-body-list-item-title-name">
          {curSong.name}
        </span>
        <span className="album_detail-body-list-item-title-info">
          {curSong.alia.length ? "(" + curSong.alia[0] + ")" : ""}
        </span>
      </div>
      <div className="album_detail-body-list-item-arthor">
        {arNameArr.join("/")}
      </div>
      <div className="album_detail-body-list-item-album">{curSong.al.name}</div>
      <div className="album_detail-body-list-item-time">
        {timeFormat(curSong.dt / 1000)}
      </div>
    </div>
  );
}

export default Item;
