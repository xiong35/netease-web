import "./index.scss";

import imgLeftArrow from "./img/left.svg";
import { useBanners } from "./hooks/useBanners";

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
            <img className="carousel-item-img" src={b.banner.imageUrl} />
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
