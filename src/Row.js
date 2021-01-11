import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, key }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // While a row loads, I need a piece of code to run(to make request).
    // if [] is blank, run once when the row loads and dont run again
    // if [] is not blank, then run everytime the array changes. so if [] was[movies] if //the movie state changes then the code gets ran again
    //cant use async function in useEffect so you write like this
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    } //any variable from outside. you have to include in here. it is a depency varaible
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path? movie.poster_path: }`}
              alt="{movie.name}"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
