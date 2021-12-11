import { useState, useEffect } from 'react'
import HotListItem from './HotListItem'
// import axios from 'axios'
import { getHotList } from '../../../../network/hotList/getHotList'

type HotListData = {
	content: string
	score: number
	searchWord: string
  iconType: number
  iconUrl: string
}

// async function getHotList(): Promise<HotListData[] | null> {
// 	let data: HotListData[] | null = null
// 	const res = await axios.get('http://api.xiong35.cn/netease/search/hot/detail')
// 	data = res.data.data
// 	return data
// }

function HotList() {
	const [data, setData] = useState<HotListData[] | null>(null)

	useEffect(() => {
		getHotList()
			.then(res => {
				if (res) {
					setData(res)
				} else {
					throw '获取热门列表失败!'
				}
			})
			.catch(err => {
        console.error(err)
				throw '获取热门列表失败!'
			})
	}, [])

	return (
		<div className="c-the_top_bar-middle-search_bar-dropdown-hotlist_wrapper">
			<h2>热搜榜</h2>
			<ul className="c-the_top_bar-middle-search_bar-dropdown-hotlist_wrapper-hotlist">
				{data ? data.map((item, index) => <HotListItem key={item.searchWord + item.score} data={item} index={index} />) : null}
			</ul>
		</div>
	)
}

export default HotList
