import "./index.scss";

import { MusicDetail } from "../../models/Music";

type AlbumBriefProps = {
  music: MusicDetail;
};

function AlbumBrief(props: AlbumBriefProps) {
  const { music } = props;

  return (
    <div className="album_brief">
      <img
        className="album_brief-img"
        src={music.al.picUrl}
        alt={music.al.name}
      />
      <div className="album_brief-name t elipsis">{music.name}</div>
      <div className="album_brief-artist t elipsis">{music.ar[0].name}</div>
    </div>
  );
}

export default AlbumBrief;
