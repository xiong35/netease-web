import close from '../../images/close.svg'

import { observer } from "mobx-react-lite"
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _DpClose() {
	return (
		<div
			className="c-the_top_bar-right-login-dropdown-close"
			onClick={() => {
        TheTopbarStore.toggleShowLoginDp()
			}}
		>
			<img src={close} className="icon" />
		</div>
	)
}

const DpClose = observer(_DpClose)

export default DpClose
