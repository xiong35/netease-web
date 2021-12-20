import "./index.scss";

import { observer } from "mobx-react-lite";

import Login from "./components/Login/Login";
import Logo from "./components/Logo/Logo";
import PageChanger from "./components/PageChanger/PageChanger";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";

function _TheTopBar() {
  return (
    <>
      <div className="c-the_top_bar">
        <Logo />
        <div className="c-the_top_bar-middle">
          <PageChanger />
          <SearchBar />
        </div>
        <div className="c-the_top_bar-right">
          <Login />
          <ThemeBtn />
        </div>
      </div>
      <div className="c-the_top_bar-place-holder"></div>
    </>
  );
}

const TheTopBar = observer(_TheTopBar);

export default TheTopBar;
