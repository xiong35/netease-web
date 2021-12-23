import "./index.scss";

import trashBin from "../../images/trashBin.svg";

function History() {
  return (
    <div className="c-the_top_bar-middle-search_bar-dropdown-history">
      <div className="c-the_top_bar-middle-search_bar-dropdown-history-header">
        <h2>搜索历史</h2>
        <img src={trashBin} className="c-the_top_bar-middle-search_bar-dropdown-history-header-icon" />
      </div>
      <div className="c-the_top_bar-middle-search_bar-dropdown-history-items"></div>
    </div>
  );
}

export default History;
