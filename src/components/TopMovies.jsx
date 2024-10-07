import React from "react";
import Card from "../components/Card";

function TopMovies() {
  const TopMovies = [
    {
      ranking: "1",
      imgUrl: "https://i.ebayimg.com/images/g/99cAAOSwLURe2uIm/s-l1200.jpg",
    },
    {
      ranking: "2",
      imgUrl:
        "https://image.tmdb.org/t/p/original/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    },
    {
      ranking: "3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      ranking: "4",
      imgUrl:
        "https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp",
    },
    {
      ranking: "5",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BM2U1YzcyOGQtNjY5NC00ZWM0LTk0ZDItMTVhN2E2ODk3MWQ4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      ranking: "6",
      imgUrl:
        "https://i.namu.wiki/i/6hVuwddnnFRE-3O-mg0pnRK_KHXA5eNSPUhTMSpiPIH3EsYcvCfBGkoKLvKpBCg5oMzzAMqe3_lJQEg5p-DJqw.webp",
    },
  ];

  return (
    <div>
      <div className="max-w-[30rem] sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[50rem] mx-auto mt-10 lg:mt-20">
        <div className="movieChart_btn_wrap flex m-3">
          <div className="tapBtn_wrap inline-flex">
            <h1 className="font-work">
              <a href="" className="no-underline text-black font-silk">Now Showing</a>
            </h1>

            {/* <h1 className="font-work">
              <a href="" className="no-underline">Coming Soon</a>
            </h1> */}
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center lg:row-gap-5 md:row-gap-4 row-gap-4 lg:mt-10">
          <Card movie={TopMovies[0]} />
          <Card movie={TopMovies[1]} />
          <Card movie={TopMovies[2]} />
          <Card movie={TopMovies[3]} />
          <Card movie={TopMovies[4]} />
          <Card movie={TopMovies[5]} />
        </div>
      </div>
    </div>
  );
}

export default TopMovies;
