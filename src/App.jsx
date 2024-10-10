import { React } from "react";
import "./index.css";
import Header from "./components/Header";
import TopMovies from "./components/TopMovies";
import Banner from "./swiper/Banner";
import Ranking from "./swiper/RankingSlide";
import CDPlayer from "./components/CDPlayer";

function App() {
  // Array for Movie img.

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Ranking />
        <TopMovies />
        <CDPlayer />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
