import "./index.scss";

import AlbumCard from "../../components/AlbumCard";
import { useQuery } from "../../hooks/useQuery";
import Carousel from "./components/Carousel";
import HomeTabs from "./components/HomeTabs";
import { HomeTabs as HomeTabsType } from "./components/HomeTabs/hooks/useTabs";
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

  const { get } = useQuery<{ tab: HomeTabsType[number] }>();
  const curTab = get("tab") || "个性推荐";

  if (curTab !== "个性推荐") {
    return (
      <div className="home">
        <HomeTabs></HomeTabs>
        <div className="not-implement">没意思，不打算实现</div>
      </div>
    );
  }
  return (
    <div className="home">
      <HomeTabs></HomeTabs>

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
