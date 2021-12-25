import "./index.scss";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { showToast } from "../../../../utils/showToast";
import { useShowDropDown } from "../../hooks/useShowDropDown";
import searchImg from "../../images/search.svg";
import Dropdown from "../Dropdown";

function SearchBar() {
  const { showDropDown, setShowDropDown } = useShowDropDown();
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  function search() {
    if (!keyword) return showToast("关键词为空", "warning");
    history.push(`/search-page?keywords=${keyword}`);
    setShowDropDown(false);
  }

  return (
    <div
      className="c-the_top_bar-middle-search_bar"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="text"
        placeholder="搜索"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onFocus={() => {
          setShowDropDown(true);
        }}
        onKeyDown={(e) => e.key === "Enter" && search()}
      />
      <img src={searchImg} className="icon" onClick={search} />
      {showDropDown && <Dropdown />}
    </div>
  );
}

export default SearchBar;
