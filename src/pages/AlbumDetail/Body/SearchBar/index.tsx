import search from '../../images/search.svg'

// import { SongListStore } from '../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _SearchBar() {
	return (
		<div className="album_detail-body-search_bar">
			<input
				type="text"
				placeholder="搜索歌单音乐"
				className="album_detail-body-search_bar-input"
			/>
			<img src={search} className="icon" />
		</div>
	)
}

const SearchBar = observer(_SearchBar)

export default SearchBar
