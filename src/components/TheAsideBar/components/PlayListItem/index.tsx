import "./index.scss";

import Img from "../../../Img";

type PlayListItem = {
  icon: string;
  content: string;
};

export default function PlayListItem(props: PlayListItem) {
  const { content, icon } = props;

  return (
    <div className="play_list_item">
      <Img
        className="play_list_item-icon"
        src={icon}
        alt=""
        loadingMask={false}
      />
      <span className="ellipsis elipsis">{content}</span>
    </div>
  );
}
