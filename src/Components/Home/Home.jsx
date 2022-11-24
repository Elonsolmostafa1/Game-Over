import React from "react";
import { useNavigate } from "react-router-dom";
import useURL from "../../Hooks/useURL";
import GameItem from "../GameItem/GameItem";
import Loading from "../Loading/Loading";

export default function Home() {
  const navigate = useNavigate();
  let { allData, loading } = useURL(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  function NavigateHome() {
    navigate("/all");
  }
  return (
    <>
      <div className="home-header text-center p-5 ">
        <h2 className="text-gray h1 pt-4  mb-0 fw-bold">
          Find & track the best{" "}
          <span className="text-primary">free-to-play </span>games!
        </h2>
        <p className="fw-light text-secondary fs-5">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <button
          onClick={NavigateHome}
          className="btn btn-outline-secondary mb-5 mt-2"
        >
          Browse Now
        </button>
      </div>
      <div className="container text-gray my-3">
        <i className="fas fa-robot mr-2 fs-2 me-3"></i>
        <span className="h3 fw-bold mb-3 d-inline-block">
          Personalized Recommendations
        </span>
        <div className="row">
          {allData.slice(0, 4).map((game, index) => (
            <GameItem
              id={game.id}
              key={index}
              gameImage={game.thumbnail}
              gameTitle={game.title}
              gameDesc={game.short_description}
              genre={game.genre}
            />
          ))}
        </div>
      </div>
      {loading == true ? <Loading /> : null}
    </>
  );
}
