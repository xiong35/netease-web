import wechat from '../../images/wechat.svg'
import QQ from '../../images/QQ.svg'
import weibo from '../../images/weibo.svg'
import netease from '../../images/netease.svg'

function DpOthers() {
	return (
		<div className="c-the_top_bar-right-login-dropdown-input-others">
			<div className="c-the_top_bar-right-login-dropdown-input-others-icon_container_wechat">
				<img src={wechat} className="icon" />
			</div>
			<div className="c-the_top_bar-right-login-dropdown-input-others-icon_container_QQ">
				<img src={QQ} className="icon" />
			</div>
			<div className="c-the_top_bar-right-login-dropdown-input-others-icon_container_weibo">
				<img src={weibo} className="icon" />
			</div>
			<div className="c-the_top_bar-right-login-dropdown-input-others-icon_container_netease">
				<img src={netease} className="icon" />
			</div>
		</div>
	)
}

export default DpOthers
