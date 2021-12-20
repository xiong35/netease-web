import "./index.scss";

import { observer } from "mobx-react-lite";

import { SelfStore } from "../../mobx/self";
import Img from "../Img";
import DialogLogin from "./components/DialogLogin";
import Logo from "./components/Logo/Logo";
import PageChanger from "./components/PageChanger/PageChanger";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import { useShowDialogLogin } from "./hooks/useShowDialogLogin";
import avatarPlaceholder from "./images/user.svg";

function _TheTopBar() {
  const { setShowDialogLogin, showDialogLogin } = useShowDialogLogin();
  const self = SelfStore.self;

  return (
    <div className="c-the_top_bar">
      <Logo />
      <div className="c-the_top_bar-middle">
        <PageChanger />
        <SearchBar />
      </div>
      <div className="c-the_top_bar-right">
        <div
          className="c-the_top_bar-right-user"
          onClick={() => {
            if (!self) setShowDialogLogin(true);
          }}
        >
          <Img
            className={
              self
                ? "c-the_top_bar-right-user-avatar"
                : "c-the_top_bar-right-user-avatar placeholder"
            }
            src={self ? self.avatarUrl : avatarPlaceholder}
            alt="avatar"
            loadingMask={false}
          />
          {self ? self.nickname : "未登录"}
        </div>
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
