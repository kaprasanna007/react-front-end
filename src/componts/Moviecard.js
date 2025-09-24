import React from "react";
import "../styles.css";

const handleError = (e) => {
  e.target.src = "image/default.jpg";
};

export default function Moviecard({ movie, isWatchlisted, toggleWatchlist }) {
  const getReating = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div>
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getReating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>

          <span className="slider">
            <span className="slider-lable">
              {isWatchlisted ? "In Watchlist" : "Add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
