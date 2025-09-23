import React from "react";
import "../styles.css";

const handleError = (e) => {
  e.target.src = "image/default.jpg";
};

const getReating = (rating) => {
  if (rating >= 8) {
    return "rating-good";
  }
  if (rating >= 5 && rating < 8) {
    return "rating-ok";
  }
  return "rating-bad";
};
export default function Moviecard({ movie }) {
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div>
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getReating(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
