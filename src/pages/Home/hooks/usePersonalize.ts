import { useEffect, useState } from "react";

import { Personalized } from "../../../models/Home";
import { getPersonalizeReq } from "../../../network/home/getPersonalize";

export function usePersonalize() {
  const [personalize, setPersonalize] = useState<Personalized[] | null>(null);

  useEffect(() => {
    getPersonalizeReq().then(setPersonalize);
  }, []);

  return { personalize };
}
