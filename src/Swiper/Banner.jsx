import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "../index.css";
import "swiper/css";
import BannerSliderData from "../config/data.json";
 
//Make sure to import each swiper style
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function Banner() {
  // This is movie data

  const toggleSliderHeart = (index) => {
    // Using the `map` method to create a new array from each element of the `bannerSlider` array.
    const updatedSlider = bannerSlider.map((movie, i) => {
      // Check if the current element's index `i` matches the clicked movie's index `index`.
      if (i === index) {
        // Spread all the existing properties of the movie object.
        return { ...movie, isLiked: !movie.isLiked };
        // Toggle the current `isLiked` value and assign the new value.
      }
      // If the index doesn't match, return the original `movie` object without any changes.
      return movie;
    });
    setBannerSlider(updatedSlider);
  };

  return (
    <div>
      {/* Swiper composition */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true}}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      
      >
        {/* slider layout  */}
        {/* This will loop through the movie data above*/}
        {BannerSliderData.bannerSlider.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="">
              {/* Video */}
              <div className="flex items-center justify-center overflow-hidden relative w-full aspect-[4.78/2] lg:aspect-[4.78/2] video">
                <iframe
                  className="object-cover absolute left-0 w-full h-full border-0 top-[-60px] translate-y-14"
                  src={movie.videoUrl}
                  title={`${movie.bannerMovieTitle} video player`}
                ></iframe>
              </div>
              {/* Info */}
              <div className="grid justify-center items-center bg-gradient-to-r from-black lg:w-[50rem] h-full absolute top-0">
                <div className="lg:m-20 ml-5 text-white grid justify-center items-center">
                  <h1 className="mb-4">{movie.bannerMovieTitle}</h1>
                  <p className="hidden lg:block">{movie.overview}</p>

                  {/* Button */}
                  <button
                    className="bg-white text-black w-[13rem] rounded-full z-30 lg:mt-5"
                    onClick={() => toggleSliderHeart(index)} // Pass index to toggle function
                  >
                    <div className="flex justify-center items-center h-10">
                      <FontAwesomeIcon
                        icon={movie.isLiked ? faHeart : regularHeart} // Use movie.isLiked here
                        size="lg"
                      />
                      <p className="ml-3 mb-0">Add to Favorites</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
