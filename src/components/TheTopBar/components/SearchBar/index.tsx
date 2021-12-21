import './index.scss'

import search from '../../images/search.svg'
import Dropdown from '../Dropdown'
import { useShowDropDown } from '../../hooks/useShowDropDown'

function SearchBar() {
  const { showDropDown, setShowDropDown } = useShowDropDown()
  return (
    <div
      className="c-the_top_bar-middle-search_bar"
      onClick={e => e.stopPropagation()}
    >
      <input type="text" placeholder="搜索" onFocus={() => {
        setShowDropDown(true)
      }} />
      <img src={search} className="icon" />
      {showDropDown && <Dropdown />}
    </div>
  )
}

export default SearchBar
