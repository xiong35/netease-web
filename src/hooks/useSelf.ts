import { useEffect } from "react";

import { SelfStore } from "../mobx/self";
import { getUserByCookieReq } from "../network/user/getUserByCookie";

const saveSelfInfo = async () => {
  const info = await getUserByCookieReq();
  if (!info) return;

  SelfStore.self = info.profile;
};

export const useSelf = () => {
  useEffect(() => {
    saveSelfInfo();
  }, []);
};
