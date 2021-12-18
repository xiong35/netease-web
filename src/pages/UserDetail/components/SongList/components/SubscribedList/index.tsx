import './index.scss'

import { observer } from 'mobx-react-lite'
// import { userStore } from '../../../../mobx/user'

function _SubscribedList() {
  return (
    <div className="user_detail-song_list-subscribed_list">
      
    </div>
  )
}

const SubscribedList = observer(_SubscribedList)

export default SubscribedList
