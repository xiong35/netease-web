import './index.scss'

import { SongListStore } from '../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'
import { numFormat } from  '../../../../../../utils/numFormat'

function _PageSelector() {
	return (
		<div className="album_detail-body-page_selector">
			<div
				className={
					SongListStore.showIndex === 0
						? 'album_detail-body-page_selector-song_list selected'
						: 'album_detail-body-page_selector-song_list'
				}
				onClick={() => {
					SongListStore.setShowIndex(0)
				}}
			>
				歌曲列表
			</div>
			<div
				className={
					SongListStore.showIndex === 1
						? 'album_detail-body-page_selector-song_list selected'
						: 'album_detail-body-page_selector-song_list'
				}
				onClick={() => {
					SongListStore.setShowIndex(1)
				}}
			>
				评论({numFormat(SongListStore.commentCount)})
			</div>
			<div
				className={
					SongListStore.showIndex === 2
						? 'album_detail-body-page_selector-song_list selected'
						: 'album_detail-body-page_selector-song_list'
				}
				onClick={() => {
					SongListStore.setShowIndex(2)
				}}
			>
				收藏者
			</div>
		</div>
	)
}

const PageSelector = observer(_PageSelector)

export default PageSelector
