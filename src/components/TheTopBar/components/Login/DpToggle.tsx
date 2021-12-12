import { observer } from 'mobx-react-lite'
import { TheTopbarStore } from '../../../../mobx/thetopbar'

function _DpToggle() {
	return (
		<div className={TheTopbarStore.LDTClassName}>
			请先同意勾选《服务条款》《隐私政策》《儿童隐私政策》
		</div>
	)
}

const DpToggle = observer(_DpToggle)

export default DpToggle
