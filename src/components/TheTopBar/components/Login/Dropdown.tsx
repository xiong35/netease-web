import DpLogo from './DpLogo'
import DpClose from './DpClose'
import DpInput from './DpInput'
import DpBtn from './DpBtn'
import DpOthers from './DpOthers'
import DpToggle from './DpToggle'
import DpTerms from './DpTerms'

import { observer } from "mobx-react-lite"
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _Dropdown() {
	return (
		<div
			className={
				TheTopbarStore.loginDpShown
					? 'c-the_top_bar-right-login-dropdown'
					: 'c-the_top_bar-right-login-dropdown hidden'
			}
		>
      <DpClose />
      <DpLogo />
			<div className="c-the_top_bar-right-login-dropdown-input">
				<DpInput />
				<DpBtn />
        <DpOthers />
			</div>
			<DpTerms />
      <DpToggle />
		</div>
	)
}

const Dropdown = observer(_Dropdown)

export default Dropdown
