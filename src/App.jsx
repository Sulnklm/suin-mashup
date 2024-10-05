import { React } from "react";
import "./index.css";
import Header from "./components/Header";
import Banner from "./Swiper/Banner";
import ForYou from "./Swiper/ForYou";

function App() {
  // Array for Movie img.

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ForYou />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
