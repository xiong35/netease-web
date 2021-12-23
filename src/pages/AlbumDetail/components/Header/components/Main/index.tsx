import './index.scss'

import { observer } from 'mobx-react-lite'

import subscribe from '../../../../images/subscribe.svg'
// import share from '../../../../images/share.svg'
import play from '../../../../images/play.svg'
// import download from '../../../../images/download.svg'
import add from '../../../../images/add.svg'
import upTri from '../../../../images/upTri.svg'
import downTri from '../../../../images/downTri.svg'

import { SongListStore } from '../../../../../../mobx/songlist'
import { PlayStore } from '../../../../../../mobx/play'
import { dateFormat } from '../../../../../../utils/dateFormat'
import { numFormat } from '../../../../../../utils/numFormat'

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
        <a
          className="album_detail-header-main-creator-name"
          onClick={() => {
            window.location.href = `/user-detail?uid=${SongListStore.creator?.userId}`
          }}
        >
          {SongListStore.creator?.nickname}
        </a>
        <span
          className="album_detail-header-main-ar-create_time"
          onClick={() => {
            window.location.href = `/user-detail?uid=${SongListStore.creator?.userId}`
          }}
        >
          {dateFormat(SongListStore.createTime)} 创建
        </span>
      </div>
      <div className="album_detail-header-main-operations">
        <button className="album_detail-header-main-operations-play_all">
          <img
            src={play}
            className="icon"
            onClick={() => {
              PlayStore.setPlayListNMusic(SongListStore.id)
            }}
          />
          播放全部
          <img src={add} className="icon" />
        </button>
        <button className="album_detail-header-main-operations-subscribe">
          <img src={subscribe} className="icon" />
          收藏({numFormat(SongListStore.subscribedCount)})
        </button>
        {/* <button className="album_detail-header-main-operations-share">
          <img src={share} className="icon" />
          分享({numFormat(SongListStore.shareCount)})
        </button>
        <button className="album_detail-header-main-operations-download">
          <img src={download} className="icon" />
          下载全部
        </button> */}
      </div>
      <div className="album_detail-header-main-info">
        {SongListStore.tags.length ? (
          <div className="album_detail-header-main-info-tags">
            <span className="album_detail-header-main-info-tags-name">
              标签：
            </span>
            <div>
              {SongListStore.tags.map(item => (
                <a href="#" className="album_detail-header-main-info-tags-item">
                  {item}&nbsp;
                </a>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="album_detail-header-main-info-count">
          <span className="album_detail-header-main-info-count-track_count">
            歌曲：{numFormat(SongListStore.trackCount)}
          </span>
          <span className="album_detail-header-main-info-count-play_count">
            播放：{numFormat(SongListStore.playCount)}
          </span>
        </div>
        {SongListStore.description ? (
          <div
            className={
              SongListStore.showDes
                ? 'album_detail-header-main-info-description full'
                : 'album_detail-header-main-info-description'
            }
          >
            <img
              src={SongListStore.showDes ? upTri : downTri}
              className="icon"
              onClick={() => {
                SongListStore.toggleShowDes()
              }}
            />
            <pre className="album_detail-header-main-info-description-content">
              简介：{SongListStore.description}
            </pre>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

const Main = observer(_Main)

export default Main
