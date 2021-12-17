import './index.scss'

import search from '../../../../images/search.svg'
import cross from '../../../../images/cross.svg'

import { SongListStore } from '../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _SearchBar() {
	return (
		<div className="album_detail-body-search_bar">
			<input
				type="text"
				placeholder="搜索歌单音乐"
				className="album_detail-body-search_bar-input"
				onChange={() => {
					const val = (
						document.querySelector(
							'.album_detail-body-search_bar-input'
						) as HTMLInputElement
					).value
					SongListStore.setSearchStr(val)
					SongListStore.search(val)
				}}
			/>
			<img
				src={SongListStore.searchStr === '' ? search : cross}
				className="icon"
				onClick={() => {
					if (SongListStore.searchStr !== '') {
						const input = document.querySelector(
							'.album_detail-body-search_bar-input'
						) as HTMLInputElement
						input.value = ''
            SongListStore.setSearchStr('')
            SongListStore.search('')
            SongListStore.resetSeq()
					}
				}}
			/>
		</div>
	)
}

const SearchBar = observer(_SearchBar)

export default SearchBar
