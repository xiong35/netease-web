import "./index.scss";

import { MusicDetail } from "../../models/Music";

type AlbumBriefProps = {
  music: MusicDetail;
  imgRef: React.RefObject<HTMLImageElement>;
};

function AlbumBrief(props: AlbumBriefProps) {
  const { music, imgRef } = props;

  return (
    <div className="album_brief">
      <img
        ref={imgRef}
        className="album_brief-img"
        src={music.al.picUrl}
        alt={music.al.name}
      />
      <div className="album_brief-name t ellipsis">{music.name}</div>
      <div className="album_brief-artist t ellipsis">
        {music.ar.map((artist) => artist.name).join("/")}
      </div>
    </div>
  );
}

export default AlbumBrief;
