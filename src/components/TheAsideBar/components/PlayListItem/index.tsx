import "./index.scss";

import Img from "../../../Img";

type PlayListItem = {
  icon: string;
  content: string;
  onClick?: () => void;
};

export default function PlayListItem(props: PlayListItem) {
  const { content, icon, onClick } = props;

  return (
    <div className="play_list_item" onClick={onClick}>
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
