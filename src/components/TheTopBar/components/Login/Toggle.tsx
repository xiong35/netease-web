import loading from '../../images/loading.gif'

import { observer } from "mobx-react-lite"
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _LoginToggle() {
	return (
		<div
			className={
				TheTopbarStore.loginTgShown
					? 'c-the_top_bar-right-login-toggle'
					: 'c-the_top_bar-right-login-toggle hidden'
			}
		>
			<img src={loading} className="icon" />
			正在加载登录页，请稍等...
		</div>
	)
}

const LoginToggle = observer(_LoginToggle)

export default LoginToggle
