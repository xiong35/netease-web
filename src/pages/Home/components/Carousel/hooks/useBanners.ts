import { useEffect, useRef, useState } from "react";

import { Banner } from "../../../../../models/Home";
import { getBannersReq } from "../../../../../network/home/getBanners";

type Switch = "prev" | "next";

type Position = "left" | "front" | "right" | "back";

const SWITCH_INTERVAL = 3000;

export function useBanners() {
  /** ["left", "front", "right", "back"] */
  const [banners, setBanners] = useState<
    { banner: Banner; position: Position }[]
  >([]);

  const timer = useRef(0);

  useEffect(() => {
    if (banners.length < 4) return;

    clearInterval(timer.current);
    timer.current = window.setInterval(
      () => switchBanners("next", false),
      SWITCH_INTERVAL
    );

    return () => clearInterval(timer.current);
  }, [banners]);

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

  function switchBanners(direction: Switch, resetTimer = true) {
    if (banners.length === 0) return;

    if (resetTimer) {
      clearInterval(timer.current);
      timer.current = window.setInterval(
        () => switchBanners("next", false),
        SWITCH_INTERVAL
      );
    }

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
