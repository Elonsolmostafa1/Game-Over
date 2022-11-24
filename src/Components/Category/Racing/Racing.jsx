import React from "react";
import useURL from "../../../Hooks/useURL";
import GameItem from "../../GameItem/GameItem";
import Loading from "../../Loading/Loading";

export default function Racing() {
  let { allData, loading,sliceData,endIndex } = useURL(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing"
  );

  return (
    <>
      <div className="container">
        <div className="row">
          {allData.slice(0,endIndex).map((game, index) => (
            <GameItem
              id={game.id}
              key={index}
              gameImage={game.thumbnail}
              gameTitle={game.title}
              gameDesc={game.short_description}
              genre={game.genre}
            />
          ))}
          {allData.length >20?<button onClick={sliceData} className='btn btn-outline-secondary px-4 py-2 see-more-btn'>See More</button>:null}
        </div>
      </div>
      {loading == true ? <Loading /> : null}
    </>
  );
}
