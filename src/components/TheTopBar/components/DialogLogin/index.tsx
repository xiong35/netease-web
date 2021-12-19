import "./index.scss";

import logoIcon from "../../../../img/logo.svg";
import Img from "../../../Img";

type DialogLoginProps = {
  close: () => void;
};

export default function DialogLogin(props: DialogLoginProps) {
  const { close } = props;

  return (
    <div className="dialog_login" onClick={(e) => e.stopPropagation()}>
      <div className="dialog_login-close" onClick={close}></div>
      <Img
        src={logoIcon}
        alt="logo"
        className="dialog_login-logo"
        loadingMask={false}
      />
      <input
        type="text"
        className="dialog_login-input"
        placeholder="请输入手机号"
      />
      <input
        type="password"
        className="dialog_login-input"
        placeholder="请输入密码"
      />
      <div className="dialog_login-button">登录</div>
    </div>
  );
}
