import "./MovieCard.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function MovieCard({ el, changeRate }) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    changeRate(el.id, rate);
  };
  const handleClick = () => {
    window.open(el.trailerSrc);
  };
  return (
    <div class="col image-holder " style={{ width: "440px" }}>
      <div class="card text-white shadow-lg bg-transparent">
        <img src={el.posterUrl} class="card-img img-4" alt="..." />
        <div class="card-img-overlay over align-items-start flex-column bd-highlight">
          <div className="d-flex justify-content-between bd-highlight align-items-center">
            <h5 class="card-title mb-auto p-2 bd-highlight">{el.title}</h5>
            <div className="App" style={{ width: "100px" }}>
              <Rating
                transition={true}
                size={15}
                onClick={handleRating}
                initialValue={el.rating}
              />
            </div>
          </div>
          <p class="card-text p-2 bd-highlight m-0">{el.description}</p>
          <button type="button" class="btn btn-outline-danger p-2 bd-highlight" onClick={handleClick}> 
            <i class="fa fa-play"></i> Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
