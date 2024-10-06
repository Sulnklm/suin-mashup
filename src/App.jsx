import { React } from "react";
import "./index.css";
import Header from "./components/Header";
import TopMovies from "./components/TopMovies";
import Banner from "./Swiper/Banner";
import ForYou from "./Swiper/ForYou";


function App() {
  // Array for Movie img.
  

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <TopMovies />
        {/* <ForYou /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
