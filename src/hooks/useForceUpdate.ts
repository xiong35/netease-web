import { useState } from "react";

export function useForceUpdate() {
  const [_, set_] = useState(false);

  function forceUpdate() {
    set_((b) => !b);
  }

  return { forceUpdate };
}
