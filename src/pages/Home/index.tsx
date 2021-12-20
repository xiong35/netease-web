import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import Carousel from "./components/Carousel";
import HomeTitle from "./components/HomeTitle";
import PersonalizedCard from "./components/PersonalizedCard";
import { usePersonalized } from "./hooks/usePersonalized";
import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  const { recommendMusic } = useRecommendedMusic();
  const { personalized } = usePersonalized();

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
      {personalized && (
        <>
          <HomeTitle title="独家放送"></HomeTitle>
          <div className="home-personalized">
            {personalized.map((item) => (
              <PersonalizedCard item={item} key={item.id}></PersonalizedCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
