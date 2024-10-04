import { React } from "react";
import "./index.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const poster = [
    "https://i.ebayimg.com/images/g/99cAAOSwLURe2uIm/s-l1200.jpg",
    "https://image.tmdb.org/t/p/original/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_FMjpg_UX1000_.jpg",
    "https://www.joblo.com/wp-content/uploads/2014/05/inside-out-poster.-pixarjpg-1.jpg",
    "https://m.media-amazon.com/images/M/MV5BM2U1YzcyOGQtNjY5NC00ZWM0LTk0ZDItMTVhN2E2ODk3MWQ4XkEyXkFqcGc@._V1_.jpg",
    "https://i.namu.wiki/i/6hVuwddnnFRE-3O-mg0pnRK_KHXA5eNSPUhTMSpiPIH3EsYcvCfBGkoKLvKpBCg5oMzzAMqe3_lJQEg5p-DJqw.webp",
  ];

  return (
    <div>
    <Header />
      <main>
          <div className="flex items-center justify-center overflow-hidden relative w-full aspect-[4.8/2] video">
             <iframe className="object-cover absolute  left-0 w-full h-full border-0" src="https://www.youtube.com/embed/LEjhY15eCx0?si=Nbw-uIrLIKeUluyL&autoplay=1&mute=1&loop=1&playlist=LEjhY15eCx0" title="YouTube video player"></iframe>
          </div>
          <Card name="blog 1" poster={poster[0]} />
          <Card name="blog 2" poster={poster[1]} />
          <Card name="blog 3" poster={poster[2]} />
          <Card name="blog 4" poster={poster[3]} />
          <Card name="blog 5" poster={poster[4]} />
          <Card name="blog 6" poster={poster[5]} />
      </main>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
