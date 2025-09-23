import React, { useState, useEffect } from "react";
import "../styles.css";
import Moviecard from "./Moviecard";

export default function MovieGrid() {
  const [movie, setmovie] = useState([]);
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setmovie(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchsGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchsSearchTerm = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const matchsRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "good":
        return movie.rating >= 8;
      case "ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "bad":
        return movie.rating < 5;

      default:
        return false;
    }
  };
  const filteredMovies = movie.filter(
    (movie) =>
      matchsGenre(movie, genre) &&
      matchsRating(movie, rating) &&
      matchsSearchTerm(movie, search)
  );
  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="search movies..."
        value={search}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Gener</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>good</option>
            <option>ok</option>
            <option>bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <Moviecard movie={movie} key={movie.id}></Moviecard>
        ))}
      </div>
    </div>
  );
}
