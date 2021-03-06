import "./index.scss";

import { observer } from "mobx-react-lite";

import Img from "../../../../../../components/Img";
import { PlayList } from "../../../../../../models/PlayList";

type ListItemProps = {
  songList: PlayList;
};

function _ListItem(props: ListItemProps) {
  return (
    <div
      className="user_detail-song_list-created_list-item"
      onClick={() => {
        window.location.href = `/album-detail?id=${props.songList.id}`;
      }}
    >
      <Img
        alt={props.songList.name}
        src={props.songList.coverImgUrl}
        className="user_detail-song_list-created_list-item-cover_img"
      />
      <div className="user_detail-song_list-created_list-item-name">
        {props.songList.name}
      </div>
      <span className="user_detail-song_list-created_list-item-count">
        {props.songList.trackCount}首
      </span>
    </div>
  );
}

const ListItem = observer(_ListItem);

export default ListItem;
