import './index.scss'
import toLeft from '../../../../../../images/toLeft.svg'
import toRight from '../../../../../../images/toRight.svg'

import { observer } from 'mobx-react-lite'
import { SongListStore } from '../../../../../../../../mobx/songlist'
import { useState } from 'react'

function _PageSelector() {
	const [pageIndex, setPageIndex] = useState(1)
	return (
		<div className="album_detail-body-subscribers-page_selector">
			<a
				className={
					pageIndex === 1
						? 'album_detail-body-subscribers-page_selector-to_left disabled'
						: 'album_detail-body-subscribers-page_selector-to_left'
				}
				href="#ad-page_changer"
				onClick={() => {
					SongListStore.updateSubscriberPage(pageIndex - 1)
					setPageIndex(pageIndex - 1)
				}}
			>
				<img src={toLeft} className="icon" />
			</a>
			<div className="album_detail-body-subscribers-page_selector-index">
				{SongListStore.commentPageIndex.map(item => (
					<a
						href="#ad-page_changer"
						className={
							pageIndex === item
								? 'album_detail-body-subscribers-page_selector-index-item selected'
								: 'album_detail-body-subscribers-page_selector-index-item'
						}
						key={item}
						onClick={() => {
							SongListStore.updateSubscriberPage(item)
							setPageIndex(item)
						}}
					>
						{item}
					</a>
				))}
			</div>
			<a
        className={
					pageIndex === SongListStore.commentPageIndex.length
						? 'album_detail-body-subscribers-page_selector-to_right disabled'
						: 'album_detail-body-subscribers-page_selector-to_right'
				}
				href="#ad-page_changer"
				onClick={() => {
          SongListStore.updateSubscriberPage(pageIndex + 1)
					setPageIndex(pageIndex + 1)
				}}
			>
				<img src={toRight} className="icon" />
			</a>
		</div>
	)
}

const PageSelector = observer(_PageSelector)

export default PageSelector
