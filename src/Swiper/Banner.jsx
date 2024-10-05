import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "../index.css";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  // false = regular heart, true = solid heart
  const [isLiked, setIsLiked] = useState(false);

  // When the toggleHeart is executed, isLiked is switched to the opposite of it's current value.
  // Each time the heart is clicked, the solid heart and the regular heart alternate and are displayed accordingly
  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  // This is movie data
  const bannerSlider = [
    {
      videoUrl:
        "https://www.youtube.com/embed/LEjhY15eCx0?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=LEjhY15eCx0",
      bannerMovieTitle: "ll",
    },
    {
      videoUrl:
        "https://www.youtube.com/embed/xOsLIiBStEs?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=xOsLIiBStEs",
      bannerMovieTitle: "ll",
    },
    {
      videoUrl:
        "https://www.youtube.com/embed/pqdHP2dWQ9M?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=pqdHP2dWQ9M",
      bannerbannerMovieTitle: "ll",
    },
  ];

  return (
    <div className="slider ">
      {/* Swiper composition */}
      <Swiper spaceBetween={50} slidesPerView={1}>
        {/* slider layout  */}
        {/* This will loop through the movie data above*/}
        {bannerSlider.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <div className="flex items-center justify-center overflow-hidden relative w-full  aspect-[4.78/2] lg:aspect-[4.78/2] video">
                <iframe
                  className="object-cover absolute left-0 w-full h-full border-0 top-[-60px] translate-y-14"
                  src={movie.videoUrl}
                  title={`${movie.bannerMovieTitle} video player`}
                ></iframe>
              </div>

              <h1 className=" bg-black">{movie.bannerMovieTitle}</h1>

              <div className="flex">
                <FontAwesomeIcon
                  icon={isLiked ? faHeart : regularHeart}
                  onClick={toggleHeart}
                  size="lg"
                />
                <p>Add to Favorites</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;