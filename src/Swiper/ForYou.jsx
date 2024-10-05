import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Card from "../components/Card";

function ForYou() {

  // Array for Movie img.
  const ForYou = [
    {
      title: "1",
      imgUrl: "https://i.ebayimg.com/images/g/99cAAOSwLURe2uIm/s-l1200.jpg",
    },
    {
      title: "2",
      imgUrl:
        "https://image.tmdb.org/t/p/original/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    },
    {
      title: "3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "4",
      imgUrl:
        "https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp",
    },
    {
      title: "5",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BM2U1YzcyOGQtNjY5NC00ZWM0LTk0ZDItMTVhN2E2ODk3MWQ4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "6",
      imgUrl:
        "https://i.namu.wiki/i/6hVuwddnnFRE-3O-mg0pnRK_KHXA5eNSPUhTMSpiPIH3EsYcvCfBGkoKLvKpBCg5oMzzAMqe3_lJQEg5p-DJqw.webp",
    },
  ];

  return (
    <div className="slider">
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <Card ForYou={ForYou[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card ForYou={ForYou[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card ForYou={ForYou[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card ForYou={ForYou[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card ForYou={ForYou[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <Card ForYou={ForYou[5]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ForYou;
