import { useEffect } from "react";

import { COOKIE } from "../constants/localStorageKey";
import { SelfStore } from "../mobx/self";
import { getUserByCookieReq } from "../network/user/getUserByCookie";

const saveSelfInfo = async () => {
  const cookie = window.localStorage.getItem(COOKIE);
  if (!cookie) return;

  const info = await getUserByCookieReq({ cookie });
  if (!info) return;

  SelfStore.self = info.profile;
};

export const useSelf = () => {
  useEffect(() => {
    saveSelfInfo();
  }, []);
};
