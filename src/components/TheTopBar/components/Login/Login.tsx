import tril from '../../images/tril.svg'

import Toggle from './Toggle'
import Dropdown from './Dropdown'

import { observer } from "mobx-react-lite"
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _Login() {
	return (
		<div className="c-the_top_bar-right-login">
			{/* <img src="" alt="avatar" className="c-the_top_bar-right-login-avatar" /> */}
			<div
				className="c-the_top_bar-right-login-user_name"
				onClick={() => {
          TheTopbarStore.toggleShowLoginTg()
          setTimeout(() => {
            TheTopbarStore.toggleShowLoginTg()
            TheTopbarStore.toggleShowLoginDp()
          }, 2000)
				}}
			>
				<span>{'未登录'}</span>
				<img src={tril} className="icon" />
			</div>
			<Toggle />
			<Dropdown />
		</div>
	)
}

const Login = observer(_Login)

export default Login
