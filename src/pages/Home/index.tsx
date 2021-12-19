import "./index.scss";

import Carousel from "./components/Carousel";

// import { useRecommendedMusic } from "./hooks/useRecommendedMusic";

function Home() {
  // const { recommendMusic } = useRecommendedMusic();

  return (
    <div className="home">
      Home
      <Carousel></Carousel>
    </div>
  );
}

export default Home;
