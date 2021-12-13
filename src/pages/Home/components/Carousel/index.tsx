import "./index.scss";

// type CarouselProps = {
// };

function Carousel(/* props: CarouselProps */) {
  // const {} = props;

  return (
    <div className="carousel">
      <div className="carousel-toggle prev">&lt;</div>

      <div className="carousel-item left">
        <img
          className="carousel-item-img"
          src="http://blog.xiong35.cn/color-extract/1.jpg"
        />
        <div className="carousel-item-badage">新歌首发</div>
      </div>
      <div className="carousel-item front">
        <img
          className="carousel-item-img"
          src="http://blog.xiong35.cn/color-extract/2.jpg"
        />
        <div className="carousel-item-badage">新歌首发</div>
      </div>
      <div className="carousel-item right">
        <img
          className="carousel-item-img"
          src="http://blog.xiong35.cn/color-extract/3.jpg"
        />
        <div className="carousel-item-badage">新歌首发</div>
      </div>
      <div className="carousel-item back">
        <img
          className="carousel-item-img"
          src="http://blog.xiong35.cn/color-extract/4.jpg"
        />
        <div className="carousel-item-badage">新歌首发</div>
      </div>

      <div className="carousel-toggle next">&gt;</div>
    </div>
  );
}

export default Carousel;
