import './index.scss'
import logo from './image/logo.svg'
import toLeft from './image/toLeft.svg'
import toRight from './image/toRight.svg'
import search from './image/search.svg'
import theme from './image/theme.svg'

// type TheTopBarProps = {

// }

function TheTopBar(/* props: TheTopBarProps */) {
	// const {} = props;
	return (
		<div className="c-the_top_bar">
			<div className="c-the_top_bar-logo">
        <img src={logo} className="icon" />
				<h2>网易云音乐</h2>
			</div>
			<div className="c-the_top_bar-page_changing">
				<a href="javascript:;">
          <img src={toLeft} className="icon" />
				</a>
				<a href="javascript:;">
          <img src={toRight} className="icon" />
				</a>
			</div>
			<div className="c-the_top_bar-search_bar">
				<input type="text" placeholder="搜索" />
        <img src={search} className="icon" />
			</div>
			<div className="c-the_top_bar-theme-btn">
        <img src={theme} className="icon" />
				<span>更换主题</span>
			</div>
		</div>
	)
}

export default TheTopBar
