import "./index.scss";

import logoIcon from "../../../../img/logo.svg";
import Img from "../../../Img";
import { useForm } from "./hooks/useForm";
import { useLogin } from "./hooks/useLogin";

type DialogLoginProps = {
  close: () => void;
};

export default function DialogLogin(props: DialogLoginProps) {
  const { close } = props;
  const { checkForm, clearHint, form, formHint, setForm } = useForm();
  const { login } = useLogin({ checkForm, form, formHint, close });

  return (
    <div
      className="dialog_login"
      onKeyDown={(e) => e.key === "Escape" && close()}
      onClick={(e) => e.stopPropagation()}
    >
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
        value={form.phone}
        onChange={(e) => setForm("phone", e.target.value)}
        onBlur={() => {
          checkForm("phone");
        }}
        onFocus={() => clearHint("phone")}
      />
      {formHint.phone && (
        <div className="dialog_login-hint">{formHint.phone}</div>
      )}
      <input
        type="password"
        className="dialog_login-input"
        placeholder="请输入密码"
        value={form.password}
        onChange={(e) => setForm("password", e.target.value)}
        onBlur={() => checkForm("password")}
        onFocus={() => clearHint("password")}
        maxLength={20}
        onKeyDown={(e) => {
          if (e.key === "Enter") login();
        }}
      />
      {formHint.password && (
        <div className="dialog_login-hint">{formHint.password}</div>
      )}
      <div className="dialog_login-button" onClick={login}>
        登录
      </div>
    </div>
  );
}
