import search from '../../images/search.svg'
import Dropdown from './Dropdown'
import { useState } from 'react'

function SearchBar() {
	const [showDp, setShowDp] = useState<boolean>(false)
	return (
		<div className="c-the_top_bar-middle-search_bar">
			<input
				type="text"
				placeholder="搜索"
				onFocus={() => {
					setShowDp(true)
				}}

        /**
        * 点击下拉框和输出框以外的区域，则关闭下拉框
        * 我认为应该把onClick放在根组件中
        * 可能要用mobx，我先不写这一部分
        */

				// onBlur={() => {
				// 	setShowDp(false)
				// }}
			/>
			<img src={search} className="icon" />
			<Dropdown showDp={showDp} />
		</div>
	)
}

export default SearchBar
