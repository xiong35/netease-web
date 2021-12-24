import "./index.scss";

import { observer } from "mobx-react-lite";

import { TheTopbarStore } from "../../../../mobx/thetopbar";

function _PageChanger() {
  const theme = TheTopbarStore.theme;

  return (
    <div
      className={`c-the_top_bar-right-theme-btn ${
        theme === "dark" ? "open" : ""
      }`}
      onClick={() => TheTopbarStore.toggleSetTheme()}
    >
      <div className="c-the_top_bar-right-theme-btn-dot"></div>
    </div>
  );
}

const PageChanger = observer(_PageChanger);

export default PageChanger;
