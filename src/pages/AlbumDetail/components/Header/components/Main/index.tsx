import './index.scss'

import { observer } from 'mobx-react-lite'

// 或许要把useUserPlayLists变成公共hook？
import { useUserPlayLists } from '../../../../../../components/TheAsideBar/hooks/useUserPlayLists'
import { PlayStore } from '../../../../../../mobx/play'
import { SongListStore } from '../../../../../../mobx/songlist'
import { dateFormat } from '../../../../../../utils/dateFormat'
import { numFormat } from '../../../../../../utils/numFormat'
import { useEffect, useState } from 'react'

// import share from '../../../../images/share.svg'
// import download from '../../../../images/download.svg'
import add from '../../../../images/add.svg'
import downTri from '../../../../images/downTri.svg'
import play from '../../../../images/play.svg'
import subscribe from '../../../../images/subscribe.svg'
import subscribed from '../../../../images/subscribed.svg'
import upTri from '../../../../images/upTri.svg'

function _Main() {
  const { createPlayLists, starPlayLists } = useUserPlayLists()
  // const desContentPre = document.querySelector(
  //   '.album_detail-header-main-info-description-content'
  // )
  // console.log(desContentPre)
  // if (desContentPre) {
  //   console.log(getComputedStyle(desContentPre).height)
  // }

  // 歌单是否由本人创建
  const createdBySelf = createPlayLists.find(
    item => item.id === SongListStore.id
  )
    ? true
    : false
  // 歌单是否已收藏
  const isSubscribed = starPlayLists.find(item => item.id === SongListStore.id)
    ? true
    : false
  const [toggleSubscribed, setToggleSubscribed] = useState(false)

  useEffect(() => {
    setToggleSubscribed(isSubscribed)
  }, [isSubscribed])

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
        <button
          className={
            !createdBySelf
              ? 'album_detail-header-main-operations-subscribe'
              : 'album_detail-header-main-operations-subscribe disabled'
          }
          onClick={() => {
            if (!toggleSubscribed) {
              SongListStore.subscribe(SongListStore.id)
            } else {
              SongListStore.unSubscribe(SongListStore.id)
            }
            setToggleSubscribed(!toggleSubscribed)
          }}
          disabled={createdBySelf}
        >
          <img
            src={toggleSubscribed && !createdBySelf ? subscribed : subscribe}
            className="icon"
          />
          {toggleSubscribed && !createdBySelf ? '已收藏' : '收藏'} (
          {numFormat(SongListStore.subscribedCount)})
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
            {SongListStore.description.split(/\r\n|\r|\n/).length > 1 ? (
              <img
                src={SongListStore.showDes ? upTri : downTri}
                className="icon"
                onClick={() => {
                  SongListStore.toggleShowDes()
                }}
              />
            ) : (
              ''
            )}

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
