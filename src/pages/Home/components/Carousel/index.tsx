import "./index.scss";

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
        &lt;
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
      >
        &gt;
      </div>
    </div>
  );
}

export default Carousel;
