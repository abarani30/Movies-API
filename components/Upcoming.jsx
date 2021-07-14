import React, { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../config";

export default function MostPopular() {
  const [upcoming, setUpcoming] = useState([]);

  let getUpcomingMovies = async () => {
    try {
      const URL = "https://api.themoviedb.org/3/movie/upcoming";
      let movies = await axios.get(`${URL}?api_key=${Config.API_KEY}`);
      setUpcoming(movies.data["results"]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => getUpcomingMovies(), []);

  return (
    <div className="most-popular">
      <h1>Upcoming</h1>
      <div className="cards">
        {upcoming.map((movie) => (
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
