import { SongListStore } from '../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _PageSelector() {
	return (
		<div className="album_detail-body-page_selector">
			<div className="album_detail-body-page_selector-song_list selected">
				歌曲列表
			</div>
			<div className="album_detail-body-page_selector-comments">
				评论({SongListStore.commentCount})
			</div>
			<div className="album_detail-body-page_selector-subscribers">收藏者</div>
		</div>
	)
}

const PageSelector = observer(_PageSelector)

export default PageSelector
