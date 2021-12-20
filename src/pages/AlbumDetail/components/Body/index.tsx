import './index.scss'

import PageChanger from './components/PageChanger'
import SearchBar from './components/SearchBar'
import List from './components/List'
import Comments from './components/Comments'
import Subscribers from './components/Subscribers'

import { SongListStore } from '../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _Body() {
	return (
		<div className="album_detail-body">
			<PageChanger />

			{SongListStore.showIndex === 0 ? (
				<>
					<SearchBar />
					<List />
				</>
			) : SongListStore.showIndex === 1 ? (
				<Comments />
			) : (
				<Subscribers />
			)}
		</div>
	)
}

const Body = observer(_Body)

export default Body
