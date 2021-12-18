import './index.scss'

import { observer } from 'mobx-react-lite'
// import { userStore } from '../../../../../../mobx/user'

function _CreatedColumn() {
  return (
    <div className="user_detail-song_list-created_column">
      
    </div>
  )
}

const CreatedColumn = observer(_CreatedColumn)

export default CreatedColumn
