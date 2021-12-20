import './index.scss'

import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../../../mobx/user'

function _Main() {
  return (
    <div className="user_detail-basic_info-main">
      <div className="user_detail-basic_info-main-upper">
        <h2 className="user_detail-basic_info-main-upper-nickname">
          {userStore.userProfile?.nickname}
        </h2>
        <span className="user_detail-basic_info-main-upper-level">
          Lv{userStore.level}
        </span>
      </div>
      <div className="user_detail-basic_info-main-bottom">
        <div className="user_detail-basic_info-main-bottom-count">
          <div className="user_detail-basic_info-main-bottom-count-item">
            {userStore.userProfile?.eventCount}
            <span className="user_detail-basic_info-main-bottom-count-item-text">
              动态
            </span>
          </div>
          <div className="user_detail-basic_info-main-bottom-count-item">
            {userStore.userProfile?.follows}
            <span className="user_detail-basic_info-main-bottom-count-item-text">
              关注
            </span>
          </div>
          <div className="user_detail-basic_info-main-bottom-count-item">
            {userStore.userProfile?.followeds}
            <span className="user_detail-basic_info-main-bottom-count-item-text">
              粉丝
            </span>
          </div>
        </div>
        <div className="user_detail-basic_info-main-bottom-other_info">
          <div className="user_detail-basic_info-main-bottom-other_info-item">
            <span className="user_detail-basic_info-main-bottom-other_info-item-text">
              个人介绍：
            </span>
            {userStore.userProfile?.signature}
          </div>
        </div>
      </div>
    </div>
  )
}

const Main = observer(_Main)

export default Main
