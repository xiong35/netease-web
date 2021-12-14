import './index.scss'

import Header from './components/Header/index'
import Body from './components/Body/index'

import { observer } from 'mobx-react-lite'
import { SongListStore } from '../../mobx/songlist'
import { useEffect } from 'react'

function _AlbumDetail() {
	useEffect(() => {
		SongListStore.setSongList(SongListStore.id)
	}, [])

	return (
		<div className="album_detail">
      <Header />
      <Body />
		</div>
	)
}

const AlbumDetail = observer(_AlbumDetail)

export default AlbumDetail
