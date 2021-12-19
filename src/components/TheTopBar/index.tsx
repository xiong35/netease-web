import "./index.scss";

import { observer } from "mobx-react-lite";

import DialogLogin from "./components/DialogLogin";
// import Login from "./components/Login/Login";
import Logo from "./components/Logo/Logo";
import PageChanger from "./components/PageChanger/PageChanger";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import { useShowDialogLogin } from "./hooks/useShowDialogLogin";

function _TheTopBar() {
  const { setShowDialogLogin, showDialogLogin } = useShowDialogLogin();

  return (
    <div className="c-the_top_bar">
      <Logo />
      <div className="c-the_top_bar-middle">
        <PageChanger />
        <SearchBar />
      </div>
      <div className="c-the_top_bar-right">
        {/* <Login /> */}
        <div onClick={() => setShowDialogLogin(true)}>未登录</div>
        <ThemeBtn />
      </div>
      {showDialogLogin && (
        <DialogLogin close={() => setShowDialogLogin(false)} />
      )}
    </div>
  );
}

const TheTopBar = observer(_TheTopBar);

export default TheTopBar;
