import { observer } from "mobx-react-lite"
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _DpTerms() {
	return (
		<div className="c-the_top_bar-right-login-dropdown-terms">
			<input
				type="checkbox"
				className="c-the_top_bar-right-login-dropdown-terms-checkbox"
				onClick={() => {
					TheTopbarStore.toggleSetAgreed()
				}}
			/>{' '}
			同意
			<a
				href="https://st.music.163.com/official-terms/service"
				className="c-the_top_bar-right-login-dropdown-terms-item"
			>
				《服务条款》
			</a>
			<a
				href="https://st.music.163.com/official-terms/privacy"
				className="c-the_top_bar-right-login-dropdown-terms-item"
			>
				《隐私政策》
			</a>
			<a
				href="https://st.music.163.com/official-terms/children"
				className="c-the_top_bar-right-login-dropdown-terms-item"
			>
				《儿童隐私政策》
			</a>
		</div>
	)
}

const DpTerms = observer(_DpTerms)

export default DpTerms
