import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Card from "../components/Card";
import NowShowingData from "../config/data.json";

function Ranking() {
  const [nowShowingSlider, setNowShowingSlider] = useState(false);
  const [comingSoonSlider, setComingSoonSlider] = useState(false);

  const nowShowingListBtn = () => {
    console.log("test");
    setNowShowingSlider(true);
  };

  const comingSoonListBtn = () => {
    console.log("test");
    setComingSoonSlider(true);
  };

  return (
    <div className="flex place-content-center">
    <div className="max-w-[20rem] md:max-w-[40rem] lg:max-w-[80rem] lg:m-20">
      <div className="movieChart_btn_wrap m-3">
        <div className="tapBtn_wrap inline-flex space-x-5">
          <h3 className="font-work" id="btnNowShowing">
            <button
              className="no-underline text-black"
              onClick={nowShowingListBtn}
            >
              Now Showing
            </button>
          </h3>
          <p className="secondaryGray text-lg flex align-items-center">|</p>
          <h3 className="font-work" id="btnComingSoon">
            <button
              className="no-underline text-black"
              onClick={comingSoonListBtn}
            >
              Coming Soon
            </button>
          </h3>
        </div>
      </div>

      <div className="max-w-[100rem]"> 
        <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        >
          {NowShowingData.nowShowingMovie.map((movie, index) => (
            <SwiperSlide>
              <Card key={index} movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
}

export default Ranking;
