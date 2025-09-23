import React from "react";
import "./styles.css";
import "./App.css";
import Header from "./componts/Header";
import Footer from "./componts/Footer";
import MovieGrid from "./componts/MovieGrid";
function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <header className="header">
        <Header></Header>
      </header>
      <div className="container ">
        <MovieGrid></MovieGrid>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
