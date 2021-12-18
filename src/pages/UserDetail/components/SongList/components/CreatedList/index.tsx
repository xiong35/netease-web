import './index.scss'

import { observer } from 'mobx-react-lite'
// import { userStore } from '../../../../../../mobx/user'

function _CreatedList() {
  return (
    <div className="user_detail-song_list-created_list">
      
    </div>
  )
}

const CreatedList = observer(_CreatedList)

export default CreatedList
