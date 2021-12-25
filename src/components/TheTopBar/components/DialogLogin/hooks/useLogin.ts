import { COOKIE } from "../../../../../constants/localStorageKey";
import { SelfStore } from "../../../../../mobx/self";
import { loginReq } from "../../../../../network/user/login";
import { showToast } from "../../../../../utils/showToast";
import { LoginForm } from "./useForm";

type UseLogin = {
  form: LoginForm;
  formHint: LoginForm;
  checkForm: () => void;
  close: () => void;
};

export const useLogin = (props: UseLogin) => {
  const { checkForm, form, formHint, close } = props;

  const login = async () => {
    checkForm();
    if (formHint.phone) return showToast(formHint.phone, "error");
    if (formHint.password) return showToast(formHint.password, "error");

    const userInfo = await loginReq({ ...form });
    if (!userInfo) return;

    SelfStore.self = userInfo.profile;

    window.localStorage.setItem(COOKIE, encodeURIComponent(userInfo.cookie));
    showToast("登录成功", "success");
    close();
  };

  return { login };
};
