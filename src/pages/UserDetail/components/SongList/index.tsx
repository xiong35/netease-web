import './index.scss'

import PageChanger from './components/PageChanger'
import CreatedList from './components/CreatedList'
import SubscribedList from './components/SubscribedList'

import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../mobx/user'

function _SongList() {
  return (
    <div className="user_detail-song_list">
      <PageChanger />
      {!userStore.showIndex ? <CreatedList /> : <SubscribedList />}
    </div>
  )
}

const SongList = observer(_SongList)

export default SongList
