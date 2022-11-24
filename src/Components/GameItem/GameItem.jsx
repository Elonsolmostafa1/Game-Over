import React from "react";
import { Link } from "react-router-dom";

export default function GameItem(props) {
  let { gameImage, gameTitle, gameDesc, genre, id } = props;
  return (
    <>
      <div className="col-md-3 my-3 game-card mouse-pointer">
        <Link className="text-decoration-none" to={`/gamedetails/${id}`}>
          <div className="form-color rounded ">
            <img src={gameImage} className="w-100" alt="game_image" />
            <div className="game-content px-2 py-2">
              <div className="d-flex align-items-center justify-content-between">
                {gameTitle.length > 15 ? (
                  <h3 className="text-gray h4 g-card-text-size ">
                    {gameTitle.split("").slice(0, 15).join("")}...
                  </h3>
                ) : (
                  <h3 className="title text-gray h4 g-card-text-size">
                    {gameTitle}
                  </h3>
                )}
                <p className="bg-light-blue fs-small rounded py-1 px-2 mt-1  text-light fw-bold">
                  FREE
                </p>
              </div>
              <div>
                <p className="text-muted">
                  {gameDesc.split("").slice(0, 30).join("")}....
                </p>
              </div>
              <div className="text-muted d-flex justify-content-between align-items-center">
                <i className="fas fa-plus-square"></i>
                <div>
                  <span className="badge rounded-3 bg-secondary text-white  me-2">
                    {genre}
                  </span>
                  <i className="fab fa-windows text-muted "></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
