import "./index.scss";

import { useState } from "react";

import search from "../../images/search.svg";
import Dropdown from "../Dropdown";

function SearchBar() {
  const [showDp, setShowDp] = useState<boolean>(false);
  return (
    <div className="c-the_top_bar-middle-search_bar">
      <input
        type="text"
        placeholder="搜索"
        onFocus={() => {
          setShowDp(true);
        }}
      />
      {/* 
				关于怎么点击别的地方让Dropdown消失，
				可以看我在写DialogLogin时候写的useShowDialogLogin.ts文件
			*/}
      <img src={search} className="icon" />
      <Dropdown showDp={showDp} />
    </div>
  );
}

export default SearchBar;
