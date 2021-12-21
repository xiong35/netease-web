import './index.scss'

import ListItem from '../ListItem'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../../../mobx/user'

function _CreatedList() {
  return (
    <div className="user_detail-song_list-created_list">
      {userStore.createdSongList.length
        ? userStore.createdSongList.map(item => <ListItem songList={item}/>)
        : ''}
    </div>
  )
}

const CreatedList = observer(_CreatedList)

export default CreatedList
