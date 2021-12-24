import "./index.scss";

import { observer } from "mobx-react-lite";

import { ToastsStore } from "../../mobx/toasts";

function _TheToasts(/* props: TheToastsProps */) {
  const toasts = ToastsStore.toasts;

  return (
    <div className="the_toasts">
      {toasts.map((toast) => (
        <div key={toast.id} className={`the_toasts-toast ${toast.severity}`}>
          {toast.value}
        </div>
      ))}
    </div>
  );
}
const TheToasts = observer(_TheToasts);

export default TheToasts;
