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
    <div className="relative border-1 aspect-[3/4] lg:w-[15rem] md:w-[13rem] w-[7rem] rounded-lg overflow-hidden">
      <img
        className="h-full lg:w-[15rem] md:w-[13rem] w-[7rem] object-cover"
        src={movie.imgUrl}
        alt={movie.title}
      />
      <h1 className="absolute bottom-0 left-3 lg:text-5xl text-white shadow-3xl">
        {movie.title}
      </h1>
      <FontAwesomeIcon
        className="absolute top-3 right-3 text-white  text-3xl"
        icon={isLiked ? faHeart : regularHeart}
        onClick={toggleHeart}
        size="lg"
      />
    </div>
  );
}

export default Card;
