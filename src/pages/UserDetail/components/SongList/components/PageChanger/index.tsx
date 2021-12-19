import './index.scss'

import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../../../mobx/user'

function _PageChanger() {
  return (
    <div className="user_detail-song_list-page_changer">
      <div
        className={
          !userStore.showIndex
            ? 'user_detail-song_list-page_changer-item selected'
            : 'user_detail-song_list-page_changer-item'
        }
        onClick={() => {
          userStore.setShowIndex(0)
        }}
      >
        创建的歌单
      </div>
      <div
        className={
          userStore.showIndex
            ? 'user_detail-song_list-page_changer-item selected'
            : 'user_detail-song_list-page_changer-item'
        }
        onClick={() => {
          userStore.setShowIndex(1)
        }}
      >
        收藏的歌单
      </div>
    </div>
  )
}

const PageChanger = observer(_PageChanger)

export default PageChanger
