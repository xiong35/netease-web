import { useEffect, useState } from "react";

export const useShowDialogLogin = () => {
  const [showDialogLogin, setShowDialogLogin] = useState(false);

  useEffect(() => {
    if (!showDialogLogin) return;
    const closeDialog = () => setShowDialogLogin(false);
    document.addEventListener("click", closeDialog);
    return () => document.removeEventListener("click", closeDialog);
  }, [showDialogLogin]);

  return { showDialogLogin, setShowDialogLogin };
};
