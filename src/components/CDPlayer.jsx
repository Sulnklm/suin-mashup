import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function CDPlayer() {
  const [isplayed, setIsPlayed] = useState(false);

  const togglePlay = () => {
    setIsPlayed(!isplayed);
  };

  return (
    <div className="relative">
      <div><img  className="absolute top-0 left-0 w-full h-full object-cover z-0" src="https://www.iamag.co/wp-content/uploads/2017/08/Coco-4K-5.jpg" alt="" /></div>
      <div className="grid relative  justify-center items-center mt-20 bg-black bg-opacity-50 z-10">
        
      <div className="grid justify-center items-center">
        <button
          onClick={togglePlay}
          className="z-1 flex justify-center items-center pt-20"
        >
          <FontAwesomeIcon
            icon={isplayed ? faPause : faPlay}
            className="text-3xl text-white"
          />
          <h1 className="font-work h1 ml-3 text-white">{isplayed ? "Pause" : "Play"}</h1>
        </button>
        <img
          src="../public/cd.png"
          className={`w-full max-w-xl z-0  mb-20 ${isplayed ? "spin" : ""}`}
        ></img>
      </div>
    </div>
    </div>
  );
}

export default CDPlayer;
