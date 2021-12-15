import { useEffect, useState } from "react";

import { getBannersReq } from "../../../../../network/home/getBanners";
import { Banner } from "../../../../../models/Home";

type Switch = "prev" | "next";

type Position = "left" | "front" | "right" | "back";

export function useBanners() {
  /** ["left", "front", "right", "back"] */
  const [banners, setBanners] = useState<
    { banner: Banner; position: Position }[]
  >([]);

  useEffect(() => {
    getBannersReq().then((_banners) => {
      if (!_banners || _banners.length < 4) return;
      setBanners([
        { banner: _banners[0], position: "left" },
        { banner: _banners[1], position: "front" },
        { banner: _banners[2], position: "right" },
        { banner: _banners[3], position: "back" },
      ]);
    });
  }, []);

  function switchBanners(direction: Switch) {
    if (banners.length === 0) return;

    if (direction === "next") {
      const newBanners = banners.map((b, index) => ({
        ...b,
        position: banners[(index + 3) % 4].position,
      }));
      setBanners(newBanners);
    } else {
      const newBanners = banners.map((b, index) => ({
        ...b,
        position: banners[(index + 1) % 4].position,
      }));
      setBanners(newBanners);
    }
  }
  return { banners, switchBanners };
}
