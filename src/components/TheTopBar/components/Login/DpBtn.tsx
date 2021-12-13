import { observer } from 'mobx-react-lite'
import { setClassName } from '../../hooks/useTgClassName'

function _DpBtn() {
	return (
		<>
			<div className="c-the_top_bar-right-login-dropdown-input-btn">
				<button
					className="c-the_top_bar-right-login-dropdown-input-btn-login"
					onClick={() => {
						setClassName()
					}}
				>
					登 录
				</button>
				<button
					className="c-the_top_bar-right-login-dropdown-input-btn-register"
					onClick={() => {
						setClassName()
					}}
				>
					注 册
				</button>
			</div>
		</>
	)
}

const DpBtn = observer(_DpBtn)

export default DpBtn
