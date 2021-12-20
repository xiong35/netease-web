import { useState } from "react";

export type LoginForm = {
  phone: string;
  password: string;
};

const initialForm = {
  phone: "",
  password: "",
};

export const useForm = () => {
  const [form, _setForm] = useState<LoginForm>(initialForm);
  const [formHint, setFormHint] = useState<LoginForm>(initialForm);

  /**
   *
   * @param key string, form的key
   * @param value string, 将要赋给form[key]的值
   */
  const setForm = (key: Partial<keyof LoginForm>, value: string) => {
    const newForm = { ...form };
    newForm[key] = value;
    _setForm(newForm);
  };

  /**
   *
   * @param key string, form的key，可选，若有key则只检查form[key]，没有则全部检查
   */
  const checkForm = (key?: Partial<keyof LoginForm>) => {
    if (!key || key === "phone") {
      /^1[3-9]\d{9}$/.test(form.phone) ||
        setFormHint({ ...formHint, phone: "手机号格式不正确" });
    }
    if (!key || key === "password") {
      let passwordFilter = form.password;

      const numberReg = /(?=.*[0-9])^[0-9A-Za-z]{8,20}$/;
      passwordFilter = passwordFilter.replace(/\d/g, "");
      const numberTest = Number(numberReg.test(form.password));

      const letterReg = /(?=.*[A-Za-z])^[0-9A-Za-z]{8,20}$/;
      passwordFilter = passwordFilter.replace(/[A-Za-z]/g, "");
      const letterTest = Number(letterReg.test(form.password));

      const charTest = Number(passwordFilter);

      if (numberTest + letterTest + charTest < 2) {
        setFormHint({ ...formHint, password: "密码格式不正确" });
      }
    }
  };

  /**
   *
   * @param key string, form的key，可选，若有key则只清除formHint[key]，没有则全部清除
   */
  const clearHint = (key?: Partial<keyof LoginForm>) => {
    const phoneHint = !key || key === "phone" ? "" : formHint.phone;
    const passwordHint = !key || key === "password" ? "" : formHint.password;
    setFormHint({ phone: phoneHint, password: passwordHint });
  };

  return { form, setForm, checkForm, clearHint, formHint };
};
