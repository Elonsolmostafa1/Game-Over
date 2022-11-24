import React from "react";
import { Link, useParams } from "react-router-dom";
import useURL from "../../Hooks/useURL";
import Loading from "../Loading/Loading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function GameDetails() {
  let allURLParams = useParams();
  let { allData, loading } = useURL(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${allURLParams.id}`
  );

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={allData.thumbnail}
              className="w-100 rounded"
              alt="allDataImg"
            />
            <div className="py-3 text-center mx-auto ">
              <span className="bg-secondary p-2 rounded-2 me-3 col-md-2 text-white mouse-pointer">
                FREE
              </span>
              <a
                target="_blank"
                className="bg-light-blue py-2  w-75 rounded-2 text-white fw-bold text-decoration-none d-inline-block"
                href={String(allData.freetogame_profile_url)}
              >
                PLAY NOW <i className="fas fa-sign-out-alt"></i>
              </a>
            </div>
          </div>

          <div className="col-md-8 text-gray">
            <h2 className="h1">{allData.title}</h2>
            <p className="fw-bold">About {allData.title}</p>
            <p className="pb-3">{allData.description}</p>
            <div className="mb-5">
              <h3>Minimum System Requirements</h3>
              {allData.minimum_system_requirements && (
                <p className="mb-1 fw-bold">
                  Graphics:{" "}
                  <span className="fw-normal">
                    {allData.minimum_system_requirements.graphics}
                  </span>
                </p>
              )}
              {allData.minimum_system_requirements && (
                <p className="mb-1 fw-bold">
                  Memory:{" "}
                  <span className="fw-normal">
                    {allData.minimum_system_requirements.memory}
                  </span>
                </p>
              )}
              {allData.minimum_system_requirements && (
                <p className="mb-1 fw-bold">
                  OS:{" "}
                  <span className="fw-normal">
                    {allData.minimum_system_requirements.os}
                  </span>
                </p>
              )}
              {allData.minimum_system_requirements && (
                <p className="mb-1 fw-bold">
                  Processor:{" "}
                  <span className="fw-normal">
                    {allData.minimum_system_requirements.processor}
                  </span>
                </p>
              )}
              {allData.minimum_system_requirements && (
                <p className="mb-1 fw-bold">
                  Storage:{" "}
                  <span className="fw-normal">
                    {allData.minimum_system_requirements.storage}
                  </span>
                </p>
              )}
            </div>
            <div className="mb-5">
              <h3>{allData.title} Screenshots</h3>
            </div>

            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {allData.screenshots && (
                    <img
                      src={allData.screenshots[0].image}
                      className="d-block w-100"
                      alt="..."
                    />
                  )}
                </div>
                <div className="carousel-item">
                  {allData.screenshots && (
                    <img
                      src={allData.screenshots[1].image}
                      className="d-block w-100"
                      alt="..."
                    />
                  )}
                </div>
                <div className="carousel-item">
                  {allData.screenshots && (
                    <img
                      src={allData.screenshots[2].image}
                      className="d-block w-100"
                      alt="..."
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="mt-3">Minimum System Requirements</h3>
              <div className="mt-3 row">
                <div className="col-md-4">
                  <p className="text-muted my-0">Title</p>
                  <p className="text-gray mt-0 mb-2">{allData.title}</p>
                </div>
                <div className="col-md-4">
                  <p className="text-muted my-0">Developer</p>
                  <p className="text-gray mt-0 mb-2">{allData.developer}</p>
                </div>
                <div className="col-md-4">
                  <p className="text-muted my-0">Publisher</p>
                  <p className="text-gray mt-0 mb-2">{allData.publisher}</p>
                </div>
                <div className="col-md-4">
                  <p className="text-muted my-0">Release Date</p>
                  <p className="text-gray mt-0 mb-2">{allData.release_date}</p>
                </div>
                <div className="col-md-4">
                  <p className="text-muted my-0">Genre</p>
                  <p className="text-gray mt-0 mb-2">{allData.genre}</p>
                </div>
                <div className="col-md-4">
                  <p className="text-muted my-0">Platform</p>
                  <p className="text-gray mt-0 mb-2">
                    <i className="fab fa-windows text-muted me-2 "></i>
                    {allData.platform}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading == true ? <Loading /> : null}
    </>
  );
}
