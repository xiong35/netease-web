/**
 * 歌曲列表、评论、收藏者页面的切换
 */
import './index.scss'

import { SongListStore } from '../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'
import { numFormat } from  '../../../../../../utils/numFormat'

function _PageChanger() {
	return (
		<div className="album_detail-body-page_changer" id="ad-page_changer">
			<div
				className={
					SongListStore.showIndex === 0
						? 'album_detail-body-page_changer-song_list selected'
						: 'album_detail-body-page_changer-song_list'
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
						? 'album_detail-body-page_changer-song_list selected'
						: 'album_detail-body-page_changer-song_list'
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
						? 'album_detail-body-page_changer-song_list selected'
						: 'album_detail-body-page_changer-song_list'
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

const PageChanger = observer(_PageChanger)

export default PageChanger
