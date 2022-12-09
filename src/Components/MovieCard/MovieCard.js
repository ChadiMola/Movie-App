import "./MovieCard.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function MovieCard({ el, changeRate,remove }) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    changeRate(el.id, rate);
  };
  return (
    <div className="col image-holder " style={{ width: "440px" }}>
      <div className="card text-white shadow-lg bg-transparent">
        <img src={el.posterUrl} className="card-img img-4" alt="..." />
        <div className="card-img-overlay over align-items-start flex-column bd-highlight">
          <div className="d-flex bd-highlight align-items-center w-100">
            <h5 className="card-title mb-auto p-2 bd-highlight">{el.title}</h5>
            <div className="App" style={{ width: "100px" }}>
              <Rating
                transition={true}
                size={15}
                onClick={handleRating}
                initialValue={el.rating}
              />
            </div>
            <div className="icon-close remove-todo-item ms-auto ms-auto p-2 bd-highlight pointeur" onClick={() => remove(el.id)}>
            <i className="fa fa-circle-xmark"></i> 
        </div>
            
          </div>
          <p className="card-text p-2 bd-highlight m-0">{el.description}</p>
          <Link to={`details/${el.id}`}>
          <button
            type="button"
            className="btn btn-outline-danger p-2 bd-highlight"
            
          >
            <i className="fa fa-play"></i> Watch Trailer
          </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default MovieCard;
