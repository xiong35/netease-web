import phone from '../../images/phone.svg'
import pswd from '../../images/pswd.svg'

function DpInput() {
	return (
		<>
			<div className="c-the_top_bar-right-login-dropdown-input-input_wrapper">
				<input
					type="text"
					className="c-the_top_bar-right-login-dropdown-input-input_wrapper-phone"
					placeholder="请输入手机号"
				/>
				<img src={phone} className="icon" />
			</div>
			<div className="c-the_top_bar-right-login-dropdown-input-input_wrapper">
				<input
					type="password"
					className="c-the_top_bar-right-login-dropdown-input-input_wrapper-pswd"
					placeholder="请输入密码"
				/>
				<img src={pswd} className="icon" />
				<span className="c-the_top_bar-right-login-dropdown-input-input_wrapper-reset_pswd">
					重设密码
				</span>
			</div>
			<div className="c-the_top_bar-right-login-dropdown-input-auto">
				<input
					type="checkbox"
					className="c-the_top_bar-right-login-dropdown-input-auto-checkbox"
				/>{' '}
				自动登录
			</div>
		</>
	)
}

export default DpInput