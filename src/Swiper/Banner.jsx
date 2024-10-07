import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "../index.css";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  // This is movie data
  const [bannerSlider, setBannerSlider] = useState([
    {
      videoUrl:
        "https://www.youtube.com/embed/LEjhY15eCx0?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=LEjhY15eCx0",
      bannerMovieTitle: "Inside Out 2",
      overview:
        "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
      isLiked: false,
    },
    {
      videoUrl:
        "https://www.youtube.com/embed/xOsLIiBStEs?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=xOsLIiBStEs",
      bannerMovieTitle: "Soul",
      overview:
        "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul.",
      isLiked: false,
    },
    {
      videoUrl:
        "https://www.youtube.com/embed/BwPL0Md_QFQ?si=Nbw-uIrLIKeUluyL&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=BwPL0Md_QFQ",
      bannerMovieTitle: "Lightyear",
      overview:
        "While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source.",
      isLiked: false,
    },
  ]);

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
    <div className="slider ">
      {/* Swiper composition */}
      <Swiper spaceBetween={50} slidesPerView={1}>
        {/* slider layout  */}
        {/* This will loop through the movie data above*/}
        {bannerSlider.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <div className="flex items-center justify-center overflow-hidden relative w-full aspect-[4.78/2] lg:aspect-[4.78/2] video">
                <iframe
                  className="object-cover absolute left-0 w-full h-full border-0 top-[-60px] translate-y-14"
                  src={movie.videoUrl}
                  title={`${movie.bannerMovieTitle} video player`}
                ></iframe>
              </div>
              <div className="grid justify-center items-center bg-gradient-to-r from-black lg:w-[50rem] h-full absolute top-0">
                <div className="lg:m-20 ml-5 text-white grid justify-center items-center">
                  <h1 className="mb-4">{movie.bannerMovieTitle}</h1>
                  <p className="hidden lg:block">{movie.overview}</p>

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