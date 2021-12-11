import tril from '../../images/tril.svg'
import Toggle from './Toggle'
import Dropdown from './Dropdown'

function Login() {
	return (
		<div className="c-the_top_bar-right-login">
			{/* <img src="" alt="avatar" className="c-the_top_bar-right-login-avatar" /> */}
			<div className="c-the_top_bar-right-login-user_name">
				<span>{'未登录'}</span>
				<img src={tril} className="icon" />
			</div>
      <Toggle />
      <Dropdown />
		</div>
	)
}

export default Login
