import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import Carousel from "./components/Carousel";
import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  const { recommendMusic } = useRecommendedMusic();

  return (
    <div className="home">
      <Carousel></Carousel>

      {recommendMusic && (
        <>
          <h2>推荐歌单 {">"}</h2>
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
