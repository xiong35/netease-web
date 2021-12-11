import theme from '../../images/theme.svg'

function PageChanger() {
	return (
		<div className="c-the_top_bar-right-theme-btn">
			<img src={theme} className="icon" />
			<span>更换主题</span>
		</div>
	)
}

export default PageChanger
