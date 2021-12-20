import { useEffect, useState } from "react";

import { Personalized } from "../../../models/Home";
import { getPersonalizedReq } from "../../../network/home/getPersonalized";

export function usePersonalized() {
  const [personalized, setPersonalized] = useState<Personalized[] | null>(null);

  useEffect(() => {
    getPersonalizedReq().then(setPersonalized);
  }, []);

  return { personalized };
}
