import './index.scss'

import { observer } from 'mobx-react-lite'
import { SongListStore } from '../../../../../../mobx/songlist'

function _CoverImg() {
	return (
		<img src={SongListStore.coverImgUrl} className="album_detail-header-img" />
	)
}

const CoverImg = observer(_CoverImg)

export default CoverImg
