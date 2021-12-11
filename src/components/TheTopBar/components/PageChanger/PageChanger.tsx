import toLeft from '../../images/toLeft.svg'
import toRight from '../../images/toRight.svg'

function PageChanger() {
	return (
		<div className="c-the_top_bar-middle-page_changer">
			<a href="javascript:;">
				<img src={toLeft} className="icon" />
			</a>
			<a href="javascript:;">
				<img src={toRight} className="icon" />
			</a>
		</div>
	)
}

export default PageChanger
