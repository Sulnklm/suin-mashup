import React from "react";
import Card from "../components/Card";

import TopMoviesData from "../config/data.json";

function TopMovies() {




  return (
    <div>
      <div className="max-w-[30rem] sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[50rem] mx-auto mt-10 lg:mt-20">

        
        <div className="grid grid-cols-3 place-items-center lg:row-gap-5 md:row-gap-4 row-gap-4 lg:mt-10">
        {TopMoviesData.topMovies.map((movie) => ( 
            <Card key={movie.ranking} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopMovies;
