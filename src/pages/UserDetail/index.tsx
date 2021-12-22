import './index.scss'

import BasicInfo from './components/BasicInfo'
import SongList from './components/SongList'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { userStore } from '../../mobx/user'
import { useQuery } from '../../hooks/useQuery'

function _UserDetail() {
  const { get } = useQuery<{ uid: string }>()

  useEffect(() => {
    // userStore.setUser(parseInt(get('uid')))
    
    // 先这么写，待会会注释这一行
    userStore.setUser(32953014)
  }, [get('uid')])

  return (
    <div className="user_detail">
      <BasicInfo />
      <SongList />
    </div>
  )
}

const UserDetail = observer(_UserDetail)

export default UserDetail
