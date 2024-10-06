import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({ movie }) {
  // false = regular heart, true = solid heart
  const [isLiked, setIsLiked] = useState(false);

  // When the toggleHeart is executed, isLiked is switched to the opposite of it's current value.
  // Each time the heart is clicked, the solid heart and the regular heart alternate and are displayed accordingly
  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="relative border-1 aspect-[3/4] lg:w-[15rem] md:w-[13rem] sm:w-[10rem] w-[7rem] rounded-lg overflow-hidden drop-shadow-lg">
        <img
          className="h-full lg:w-[15rem] md:w-[13rem] sm:w-[10rem] w-[7rem] object-cover"
          src={movie.imgUrl}
        />
        <h1 className="absolute bottom-0 left-3 lg:text-5xl text-white drop-shadow-lg">
          {movie.ranking}
        </h1>
        <FontAwesomeIcon
          className="absolute top-3 right-3 text-white text-2xl drop-shadow-lg"
          icon={isLiked ? faHeart : regularHeart}
          onClick={toggleHeart}
          size="lg"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Card;
