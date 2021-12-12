import { observer } from 'mobx-react-lite'
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function setClassName() {
	if (!TheTopbarStore.lgTermsAgreed) {
		TheTopbarStore.setLDTClassName(
			'c-the_top_bar-right-login-dropdown-toggle transparent'
		)
		new Promise<void>(res => {
			setTimeout(() => {
				TheTopbarStore.setLDTClassName(
					'c-the_top_bar-right-login-dropdown-toggle'
				)
				res()
			}, 1)
		})
			.then(() => {
				return new Promise<void>(res => {
					setTimeout(() => {
						TheTopbarStore.setLDTClassName(
							'c-the_top_bar-right-login-dropdown-toggle transparent'
						)
						res()
					}, 1000)
				})
			})
			.then(() => {
				setTimeout(() => {
					TheTopbarStore.setLDTClassName(
						'c-the_top_bar-right-login-dropdown-toggle hidden'
					)
				}, 300)
			})
	}
}

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
