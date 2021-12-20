import './index.scss'
import sort from '../../../../../../images/sort.svg'
import sortUp from '../../../../../../images/sortUp.svg'
import sortDown from '../../../../../../images/sortDown.svg'

import { observer } from 'mobx-react-lite'

import { SongListStore } from '../../../../../../../../mobx/songlist'

function _Header() {
	return (
		<div className="album_detail-body-list-header">
			<div className="album_detail-body-list-header-operation">操作</div>
			<div
				className="album_detail-body-list-header-sort_by_title"
				onClick={() => {
					SongListStore.sortByTitle(SongListStore.titleSeq)
					SongListStore.titleSeq = ((SongListStore.titleSeq + 1) % 3) as
						| 0
						| 1
						| 2
				}}
			>
				标题
				<span className="album_detail-body-list-header-info">
					{SongListStore.titleSeq === 0
						? ''
						: SongListStore.titleSeq === 1
						? '升序'
						: '降序'}
				</span>
				<img
					src={
						SongListStore.titleSeq === 0
							? sort
							: SongListStore.titleSeq === 1
							? sortUp
							: sortDown
					}
					className={!SongListStore.titleSeq ? 'icon' : 'icon shown'}
				/>
			</div>
			<div
				className="album_detail-body-list-header-sort_by_arthor"
				onClick={() => {
					SongListStore.sortByArthor(SongListStore.arthorSeq)
					SongListStore.arthorSeq = ((SongListStore.arthorSeq + 1) % 3) as
						| 0
						| 1
						| 2
				}}
			>
				歌手
				<span className="album_detail-body-list-header-info">
					{SongListStore.arthorSeq === 0
						? ''
						: SongListStore.arthorSeq === 1
						? '升序'
						: '降序'}
				</span>
				<img
					src={
						SongListStore.arthorSeq === 0
							? sort
							: SongListStore.arthorSeq === 1
							? sortUp
							: sortDown
					}
					className={!SongListStore.arthorSeq ? 'icon' : 'icon shown'}
				/>
			</div>
			<div
				className="album_detail-body-list-header-sort_by_album"
				onClick={() => {
					SongListStore.sortByAlbum(SongListStore.albumSeq)
					SongListStore.albumSeq = ((SongListStore.albumSeq + 1) % 3) as
						| 0
						| 1
						| 2
				}}
			>
				专辑
				<span className="album_detail-body-list-header-info">
					{SongListStore.albumSeq === 0
						? ''
						: SongListStore.albumSeq === 1
						? '升序'
						: '降序'}
				</span>
				<img
					src={
						SongListStore.albumSeq === 0
							? sort
							: SongListStore.albumSeq === 1
							? sortUp
							: sortDown
					}
					className={!SongListStore.albumSeq ? 'icon' : 'icon shown'}
				/>
			</div>
			<div
				className="album_detail-body-list-header-sort_by_time"
				onClick={() => {
					SongListStore.sortByTime(SongListStore.timeSeq)
					SongListStore.timeSeq = ((SongListStore.timeSeq + 1) % 3) as 0 | 1 | 2
				}}
			>
				时间
				<span className="album_detail-body-list-header-info">
					{SongListStore.timeSeq === 0
						? ''
						: SongListStore.timeSeq === 1
						? '升序'
						: '降序'}
				</span>
				<img
					src={
						SongListStore.timeSeq === 0
							? sort
							: SongListStore.timeSeq === 1
							? sortUp
							: sortDown
					}
					className={!SongListStore.timeSeq ? 'icon' : 'icon shown'}
				/>
			</div>
		</div>
	)
}

const Header = observer(_Header)

export default Header
