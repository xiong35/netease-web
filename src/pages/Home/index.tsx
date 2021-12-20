import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import Carousel from "./components/Carousel";
import HomeTitle from "./components/HomeTitle";
import NewSongItem from "./components/NewSongItem";
import PersonalizedCard from "./components/PersonalizedCard";
import { useNewSongs } from "./hooks/useNewSongs";
import { usePersonalized } from "./hooks/usePersonalized";
import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  const { recommendMusic } = useRecommendedMusic();
  const { personalized } = usePersonalized();
  const { newSongs } = useNewSongs();

  return (
    <div className="home">
      <Carousel></Carousel>

      {recommendMusic && (
        <>
          <HomeTitle title="推荐歌单"></HomeTitle>
          <div className="home-recommend_playlist home-r_pl">
            {recommendMusic.slice(0, 8).map((music) => (
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

      {newSongs && (
        <>
          <HomeTitle title="最新音乐"></HomeTitle>
          <div className="home-new_songs">
            {newSongs.map((song) => (
              <NewSongItem key={song.id} song={song}></NewSongItem>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
