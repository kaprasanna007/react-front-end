import React from "react";
import "./styles.css";
import "./App.css";
import Header from "./componts/Header";
import Footer from "./componts/Footer";
import MovieGrid from "./componts/MovieGrid";
import Watchlist from "./componts/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [movie, setmovie] = useState([]);
  const [watchlist, setwatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setmovie(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setwatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  watchlist={watchlist}
                  movie={movie}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/Watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movie={movie}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
