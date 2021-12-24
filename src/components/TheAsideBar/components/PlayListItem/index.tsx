import "./index.scss";

import { notImplemented } from "../../../../utils/notImplemented";
import Img from "../../../Img";

type PlayListItem = {
  icon: string;
  content: string;
};

export default function PlayListItem(props: PlayListItem) {
  const { content, icon } = props;

  return (
    <div className="play_list_item" onClick={notImplemented}>
      <Img
        className="play_list_item-icon"
        src={icon}
        alt=""
        loadingMask={false}
      />
      <span className="ellipsis">{content}</span>
    </div>
  );
}
