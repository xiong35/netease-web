import './index.scss'

import { observer } from 'mobx-react-lite'
// import { userStore } from '../../../../mobx/user'

function _PageChanger() {
  return (
    <div className="user_detail-song_list-page_changer">
      <div className={'user_detail-song_list-page_changer-item selected'}>
        创建的歌单
      </div>
      <div className={'user_detail-song_list-page_changer-item'}>
        收藏的歌单
      </div>
    </div>
  )
}

const PageChanger = observer(_PageChanger)

export default PageChanger
