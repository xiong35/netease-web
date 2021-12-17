import './index.scss'

import { observer } from 'mobx-react-lite'

import Header from './components/Header'
import Item from './components/Item'
import { SongListStore } from '../../../../../../mobx/songlist'

function _List() {
	return (
		<div className="album_detail-body-list">
			<Header />
			{SongListStore.trackIds.length ? (
				SongListStore.trackIds.map((item, index) => (
					<Item song={item} index={index} key={item.id} />
				))
			) : (
				<div className="album_detail-body-list-hint">
					未能找到与
					<span className="album_detail-body-list-hint-key_word">
						"{SongListStore.searchStr}"
					</span>
					相关的任何音乐
				</div>
			)}
		</div>
	)
}

const List = observer(_List)

export default List
