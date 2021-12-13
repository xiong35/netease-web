import { observer } from "mobx-react-lite";

import subscribe from "../../images/subscribe.svg";
import share from "../../images/share.svg";
import play from "../../images/play.svg";
import download from "../../images/download.svg";
import add from "../../images/add.svg";
import { dateFormat } from "../../../../utils/dateFormat";
import { SongListStore } from "../../../../mobx/songlist";

function _Main() {
  return (
    <div className="album_detail-header-main">
      <div className="album_detail-header-main-title">
        <span className="album_detail-header-main-title-tag">歌单</span>
        <h1 className="album_detail-header-main-title-content">
          {SongListStore.name}
        </h1>
      </div>
      <div className="album_detail-header-main-creator">
        <img
          src={SongListStore.creator?.avatarUrl}
          className="album_detail-header-main-creator-avatar"
        />
        <a href="#" className="album_detail-header-main-creator-name">
          {SongListStore.creator?.nickname}
        </a>
        <span className="album_detail-header-main-ar-create_time">
          {dateFormat(SongListStore.createTime)} 创建
        </span>
      </div>
      <div className="album_detail-header-main-operations">
        <button className="album_detail-header-main-operations-play_all">
          <img src={play} className="icon" />
          播放全部
          <img src={add} className="icon" />
        </button>
        <button className="album_detail-header-main-operations-subscribe">
          <img src={subscribe} className="icon" />
          收藏({SongListStore.subscribedCount})
        </button>
        <button className="album_detail-header-main-operations-share">
          <img src={share} className="icon" />
          分享({SongListStore.shareCount})
        </button>
        <button className="album_detail-header-main-operations-download">
          <img src={download} className="icon" />
          下载全部
        </button>
      </div>
      <div className="album_detail-header-main-info">
        <span className="album_detail-header-main-info-track_count">
          歌曲：{SongListStore.trackCount}
        </span>
        <span className="album_detail-header-main-info-play_count">
          播放：{SongListStore.playCount}
        </span>
      </div>
    </div>
  );
}

const Main = observer(_Main);

export default Main;
