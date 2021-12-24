import "./index.scss";

import { useHistory } from "react-router-dom";

import { PlayList as PlayListDef } from "../../models/PlayList";
import Img from "../Img";

type PlayListProps = Pick<
  PlayListDef,
  "id" | "coverImgUrl" | "trackCount" | "creator" | "name"
>;

export default function PlayList(props: PlayListProps) {
  const { coverImgUrl, creator, id, trackCount, name } = props;

  const history = useHistory();

  return (
    <div
      className="play_list"
      onClick={() => history.push(`/album-detail?id=${id}`)}
    >
      <Img src={coverImgUrl} alt="封面" className="play_list-cover" />
      <div className="play_list-name ellipsis">{name}</div>
      <div className="play_list-count ellipsis">{trackCount}首</div>
      <div className="play_list-creator ellipsis">
        <span className="play_list-creator-by">by</span>
        {creator.nickname}
      </div>
    </div>
  );
}
