import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import Carousel from "./components/Carousel";
import HomeTitle from "./components/HomeTitle";
import { usePersonalize } from "./hooks/usePersonalize";
import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  const { recommendMusic } = useRecommendedMusic();
  const { personalize } = usePersonalize();

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
      {personalize && (
        <>
          <HomeTitle title="独家放送"></HomeTitle>
          <p>{JSON.stringify(personalize)}</p>
        </>
      )}
    </div>
  );
}

export default Home;
