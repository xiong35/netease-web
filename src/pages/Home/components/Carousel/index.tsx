import "./index.scss";

import { useBanners } from "./hooks/useBanners";

// type CarouselProps = {
// };

function Carousel(/* props: CarouselProps */) {
  // const {} = props;

  const { banners } = useBanners();

  return (
    <div className="carousel">
      <div className="carousel-toggle prev">&lt;</div>

      {banners.map((b, index) => {
        const className = ["left", "front", "right", "back"][index];

        return (
          <div className={"carousel-item " + className}>
            <img className="carousel-item-img" src={b.imageUrl} />
            {b.typeTitle && (
              <div className="carousel-item-badage">{b.typeTitle}</div>
            )}
          </div>
        );
      })}

      <div className="carousel-toggle next">&gt;</div>
    </div>
  );
}

export default Carousel;
