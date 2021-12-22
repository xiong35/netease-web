import './index.scss'

import Header from './components/Header/index'
import Body from './components/Body/index'

import { observer } from 'mobx-react-lite'
import { SongListStore } from '../../mobx/songlist'
import { useEffect } from 'react'
import { useQuery } from '../../hooks/useQuery'

function _AlbumDetail() {
  const { get } = useQuery<{ id: string }>()

  useEffect(() => {
    // SongListStore.setSongList(parseInt(get('id')))

    // 先这么写，待会会注释这一行
    SongListStore.setSongList(2137987910)
  }, [get('id')])

  return (
    <div className="album_detail">
      <Header />
      <Body />
    </div>
  )
}

const AlbumDetail = observer(_AlbumDetail)

export default AlbumDetail
