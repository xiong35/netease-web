import "./index.scss";

import toLeft from "../../images/toLeft.svg";
import toRight from "../../images/toRight.svg";

function PageChanger() {
  return (
    <div className="c-the_top_bar-middle-page_changer">
      <button className="c-the_top_bar-middle-page_changer-btn">
        <img src={toLeft} className="icon" />
      </button>
      <button className="c-the_top_bar-middle-page_changer-btn">
        <img src={toRight} className="icon" />
      </button>
    </div>
  );
}

export default PageChanger;
