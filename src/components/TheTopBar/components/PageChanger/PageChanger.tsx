import "./index.scss";

import { useHistory } from "react-router-dom";

import toLeft from "../../images/toLeft.svg";
import toRight from "../../images/toRight.svg";

function PageChanger() {
  const history = useHistory();
  return (
    <div className="c-the_top_bar-middle-page_changer">
      <button
        onClick={() => history.go(1)}
        className="c-the_top_bar-middle-page_changer-btn"
      >
        <img src={toLeft} className="icon" />
      </button>
      <button
        onClick={() => history.go(-1)}
        className="c-the_top_bar-middle-page_changer-btn"
      >
        <img src={toRight} className="icon" />
      </button>
    </div>
  );
}

export default PageChanger;
