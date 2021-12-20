import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import Carousel from "./components/Carousel";
import HomeTitle from "./components/HomeTitle";
import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  const { recommendMusic } = useRecommendedMusic();

  return (
    <div className="home">
      <Carousel></Carousel>

      {recommendMusic && (
        <>
          <HomeTitle title="推荐歌单"></HomeTitle>
          <div className="home-recommend_playlist home-r_pl">
            {recommendMusic.map((music) => (
              <AlbumCard music={music} key={music.id}></AlbumCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
