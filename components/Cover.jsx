import React, { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../config";
import CoverDetails from "./CoverDetails";

export default function Cover() {
  const [upcoming, setUpcoming] = useState([]);
  const [movie, setMovie] = useState(0);

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

  function nextMovie() {
    if (movie === 20) {
      setMovie(0);
    } else {
      setMovie(movie + 1);
    }
  }

  function previousMovie() {
    if (movie === 0) {
      setMovie(0);
    } else {
      setMovie(movie - 1);
    }
  }

  return (
    <section className="cover">
      <CoverDetails
        current={upcoming}
        movie={movie}
        previous={previousMovie}
        next={nextMovie}
      />
    </section>
  );
}
