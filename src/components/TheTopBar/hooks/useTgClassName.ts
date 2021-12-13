import { TheTopbarStore } from '../../../mobx/thetopbar'

/** 修改toggle的类名，以让正常地显示和消失 */
export function setClassName() {
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