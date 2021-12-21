import './index.scss'

import CoverImg from './components/CoverImg'
import Main from './components/Main'

function Header() {
	return (
		<div className="album_detail-header">
      <CoverImg />
      <Main />
		</div>
	)
}

export default Header
