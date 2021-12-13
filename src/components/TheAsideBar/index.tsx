import "./index.scss";

import { useState } from "react";

import Img from "../Img";
import { myMusic } from "./data/myMusic";
import { tabs } from "./data/tabs";

// type TheAsideBarProps = {
// };

function TheAsideBar(/* props: TheAsideBarProps */) {
  // const {} = props;
  const [tabSelected, setTabSelected] = useState(tabs[0]);

  return (
    <div className="aside_bar">
      {tabs.map((tab) => (
        <div
          className={`aside_bar-tab ${tabSelected === tab ? "selected" : ""}`}
          key={tab}
          onClick={() => setTabSelected(tab)}
        >
          {tab}
        </div>
      ))}
      <div className="aside_bar-title">我的音乐</div>
      {myMusic.map((myMusicItem) => (
        <div className="aside_bar-my_music">
          <Img
            className="aside_bar-my_music-icon"
            src={myMusicItem.icon}
            alt=""
            loadingMask={false}
          />
          <span>{myMusicItem.content}</span>
        </div>
      ))}
      <div className="aside_bar-title">创建的歌单</div>
    </div>
  );
}

export default TheAsideBar;
