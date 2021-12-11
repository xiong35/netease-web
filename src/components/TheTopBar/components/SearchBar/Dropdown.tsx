import History from './History'
import HotList from './HotList'

type DpProps = {
	showDp: boolean
}

function Dropdown(props: DpProps) {
	return (
		<div
			className={
				props.showDp
					? 'c-the_top_bar-middle-search_bar-dropdown'
					: 'c-the_top_bar-middle-search_bar-dropdown hidden'
			}
		>
			<History />
			<HotList />
		</div>
	)
}

export default Dropdown
