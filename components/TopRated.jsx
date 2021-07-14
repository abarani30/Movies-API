import React, { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../config";

export default function TopRated() {
  const [topRated, setTopRated] = useState([]);

  let getTopRatedMovies = async () => {
    try {
      const URL = "https://api.themoviedb.org/3/movie/top_rated";
      let movies = await axios.get(`${URL}?api_key=${Config.API_KEY}`);
      setTopRated(movies.data["results"]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => getTopRatedMovies(), []);

  return (
    <div className="top-rated">
      <h1>Top Rated</h1>
      <div className="cards">
        {topRated.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
            <div className="overlay">
              <small className="date">{movie.release_date}</small>
              <br />
              <small>{movie.overview}</small>
            </div>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
