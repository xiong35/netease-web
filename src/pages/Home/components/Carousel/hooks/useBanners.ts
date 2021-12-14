import { useEffect, useState } from "react";

import { getBannersReq } from "../../../../../network/home/getBanners";
import { Banner } from "../../../../../models/Home";

export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    getBannersReq().then((_banners) => setBanners(_banners || []));
  }, []);
  return { banners: banners.slice(0, 4) };
}
