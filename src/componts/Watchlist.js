import React from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

export default function Watchlist({ movie, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title"> your Watchlist </h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movies = movie.find((movie) => movie.id === id);
          return (
            <Moviecard
              key={id}
              movie={movies}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></Moviecard>
          );
        })}
      </div>
    </div>
  );
}
