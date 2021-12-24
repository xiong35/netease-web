import "./index.scss";

import Img from "../../../../components/Img";
import { useBanners } from "./hooks/useBanners";
import imgLeftArrow from "./img/left.svg";

// type CarouselProps = {
// };

function Carousel(/* props: CarouselProps */) {
  // const {} = props;

  const { banners, switchBanners } = useBanners();

  return (
    <div className="carousel">
      <div
        className="carousel-toggle prev"
        onClick={() => switchBanners("prev")}
      >
        <img src={imgLeftArrow} className="carousel-toggle-img" />
      </div>

      {banners.map((b) => {
        return (
          <div
            className={"carousel-item " + b.position}
            key={b.banner.imageUrl}
          >
            <img
              alt="轮播图"
              className="carousel-item-img"
              src={b.banner.imageUrl}
            />
            {b.banner.typeTitle && (
              <div className="carousel-item-badage">{b.banner.typeTitle}</div>
            )}
          </div>
        );
      })}

      <div
        className="carousel-toggle next"
        onClick={() => switchBanners("next")}
        style={{ transform: "rotate(180deg)" }}
      >
        <img src={imgLeftArrow} className="carousel-toggle-img" />
      </div>
    </div>
  );
}

export default Carousel;
