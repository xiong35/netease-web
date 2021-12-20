import './index.scss'

import Main from './components/Main'

import { observer } from 'mobx-react-lite'
import { userStore } from '../../../../mobx/user'

function _BasicInfo() {
  return (
    <div className="user_detail-basic_info">
      <img
        src={userStore.userProfile?.avatarUrl}
        className="user_detail-basic_info-avatar"
      />
      <Main />
    </div>
  )
}

const BasicInfo = observer(_BasicInfo)

export default BasicInfo
