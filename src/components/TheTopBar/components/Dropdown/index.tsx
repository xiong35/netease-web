import './index.scss'

import History from '../History'
import HotList from '../HotList'

function Dropdown() {
  return (
    <div className={'c-the_top_bar-middle-search_bar-dropdown'}>
      <History />
      <HotList />
    </div>
  )
}

export default Dropdown
