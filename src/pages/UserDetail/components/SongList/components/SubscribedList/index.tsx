import './index.scss'

import ListItem from '../ListItem'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../../../mobx/user'

function _Subscribed() {
  return (
    <div className="user_detail-song_list-subscribed_list">
      {userStore.subscribedSongList.length
        ? userStore.subscribedSongList.map(item => <ListItem songList={item}/>)
        : ''}
    </div>
  )
}

const Subscribed = observer(_Subscribed)

export default Subscribed
