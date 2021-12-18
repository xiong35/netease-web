import './index.scss'

import BasicInfo from './components/BasicInfo'
import SongList from './components/SongList'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { userStore } from '../../mobx/user'

// type userDetailProps = {
//   uid: number
// }

function _UserDetail(/** props: userDetailProps */) {
  useEffect(() => {
    userStore.setUser(6337403223)
  }, [])

  return (
    <div className="user_detail">
      <BasicInfo />
      <SongList />
    </div>
  )
}

const UserDetail = observer(_UserDetail)

export default UserDetail
