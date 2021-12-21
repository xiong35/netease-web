import "./index.scss";

import { useState } from "react";

import Img from "../Img";
import { myMusic } from "./data/myMusic";
import { tabs } from "./data/tabs";
import leftIcon from "./img/left.svg";

function TheAsideBar() {
  const [tabSelected, setTabSelected] = useState(tabs[0]);
  const [asideBarShrink, setAsideBarShrink] = useState(false);

  return (
    <>
      <div
        className={"aside_bar-placeholder" + (asideBarShrink ? " shrink" : "")}
      ></div>
      <div className={"aside_bar" + (asideBarShrink ? " shrink" : "")}>
        <div
          className={"aside_bar-arrow" + (asideBarShrink ? " show" : "")}
          onClick={() => setAsideBarShrink(!asideBarShrink)}
        >
          <Img
            src={leftIcon}
            alt="arrow"
            className={
              "aside_bar-arrow-icon" + (asideBarShrink ? " right" : "")
            }
          />
        </div>
        <div className="aside_bar-wrap">
          {tabs.map((tab) => (
            <div
              className={`aside_bar-tab ${
                tabSelected === tab ? "selected" : ""
              }`}
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
      </div>
    </>
  );
}

export default TheAsideBar;
