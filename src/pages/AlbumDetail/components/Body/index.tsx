import './index.scss'

import PageSelector from './components/PageSelector'
import SearchBar from './components/SearchBar'
import List from './components/List'

function Body() {
	return (
		<div className="album_detail-body">
      <PageSelector />
      <SearchBar />
      <List />
		</div>
	)
}

export default Body
