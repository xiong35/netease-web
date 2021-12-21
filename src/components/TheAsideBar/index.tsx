import "./index.scss";

import { observer } from "mobx-react-lite";
import { useState } from "react";

import Img from "../Img";
import PlayListItem from "./components/PlayListItem";
import { myMusic } from "./data/myMusic";
import { tabs } from "./data/tabs";
import { useUserPlayLists } from "./hooks/useUserPlayLists";
import leftIcon from "./img/left.svg";
import playListIcon from "./img/playList.svg";

function _TheAsideBar() {
  const [tabSelected, setTabSelected] = useState(tabs[0]);
  const [asideBarShrink, setAsideBarShrink] = useState(false);
  const { createPlayLists, starPlayLists } = useUserPlayLists();
  const [createListHidden, setCreateListHidden] = useState(true);
  const [starListHidden, setStarListHidden] = useState(true);

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
            <PlayListItem
              content={myMusicItem.content}
              icon={myMusicItem.icon}
              key={myMusicItem.content}
            />
          ))}
          <div
            className="aside_bar-title"
            onClick={() => setCreateListHidden(!createListHidden)}
          >
            创建的歌单
            <span
              className={
                "aside_bar-title-triangle" + (createListHidden ? " rotate" : "")
              }
            >
              ▼
            </span>
          </div>
          {createListHidden ||
            createPlayLists.map((list) => (
              <PlayListItem
                content={list.name}
                icon={playListIcon}
                key={list.id}
              />
            ))}
          <div
            className="aside_bar-title"
            onClick={() => setStarListHidden(!starListHidden)}
          >
            收藏的歌单
            <span
              className={
                "aside_bar-title-triangle" + (starListHidden ? " rotate" : "")
              }
            >
              ▼
            </span>
          </div>
          {starListHidden ||
            starPlayLists.map((list) => (
              <PlayListItem
                content={list.name}
                icon={playListIcon}
                key={list.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const TheAsideBar = observer(_TheAsideBar);

export default TheAsideBar;
