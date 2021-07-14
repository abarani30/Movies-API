import React from "react";

export default function CoverDetails({ current, movie, previous, next }) {
  function previousMovie() {
    previous();
  }

  function nextMovie() {
    next();
  }

  const movieObj = current[movie];

  return [{ ...movieObj }].map((m, index) => (
    <div key={index}>
      <img
        src={`http://image.tmdb.org/t/p/original${m.backdrop_path}`}
        className="cover-img"
        alt=""
      />
      <div className="dim">
        <div className="container">
          <div className="text">
            <h1>{m.original_title}</h1>
            <p style={{ color: "#ffba00" }} className="year">
              {m.release_date}
            </p>
            <p>Popularity: {m.popularity}</p>
          </div>
          <div className="controls">
            <button className="previous" onClick={previousMovie}></button>
            <p>{movie}/20</p>
            <button className="next" onClick={nextMovie}></button>
          </div>
        </div>
      </div>
    </div>
  ));
}
