import toRight from "../../images/toRight.svg";
import toLeft from "../../images/toLeft.svg";

function PageChanger() {
  return (
    <div className="c-the_top_bar-middle-page_changer">
      <a href="#">
        <img src={toLeft} className="icon" />
      </a>
      <a href="#">
        <img src={toRight} className="icon" />
      </a>
    </div>
  );
}

export default PageChanger;
