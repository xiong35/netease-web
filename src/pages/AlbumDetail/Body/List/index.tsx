import { observer } from "mobx-react-lite";

import Item from "./Item";
import { SongListStore } from "../../../../mobx/songlist";

function _List() {
  return (
    <div className="album_detail-body-list">
      <div className="album_detail-body-list-header">
        <div className="album_detail-body-list-header-operation">操作</div>
        <div className="album_detail-body-list-header-sort_by_title">标题</div>
        <div className="album_detail-body-list-header-sort_by_singer">歌手</div>
        <div className="album_detail-body-list-header-sort_by_album">专辑</div>
        <div className="album_detail-body-list-header-sort_by_time">时间</div>
      </div>
      {SongListStore.trackIds.map((item, index) => (
        <Item song={item} index={index} key={item.id} />
      ))}
    </div>
  );
}

const List = observer(_List);

export default List;
